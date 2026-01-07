import { NextRequest } from "next/server";
import { createPublicClient, http, createWalletClient } from "viem";
import { base } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import ABI from "../../../lib/abi.json";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as `0x${string}`;
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export async function POST(req: NextRequest) {
  try {
    const { userAddress } = await req.json();

    const account = privateKeyToAccount(PRIVATE_KEY);

    const client = createWalletClient({
      account,
      chain: base,
      transport: http(),
    });

    // Miktar bigint olmalı
    const amount = 1n;

    const tx = await client.writeContract({
  address: CONTRACT_ADDRESS,
  abi: ABI,
  functionName: "mintTo",
  args: [userAddress, amount, ZERO_ADDRESS],
  chain: base,
  account, // ← ZORUNLU
});

    return new Response(
      JSON.stringify({ success: true, tx }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error }),
      { status: 500 }
    );
  }
}
