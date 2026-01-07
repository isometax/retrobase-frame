import { NextRequest } from "next/server"
import { encodeFunctionData } from "viem"
import { base } from "viem/chains"

const CONTRACT_ADDRESS = "0xb6aa735feca24462bdc56b1408a82e24820fedd0"
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const untrustedData = body?.untrustedData
  const userAddress = untrustedData?.requesterAddress

  const amount = Number(new URL(req.url).searchParams.get("amount") || "1")

  const calldata = encodeFunctionData({
    abi: [
      {
        name: "mintTo",
        type: "function",
        stateMutability: "payable",
        inputs: [
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
          { name: "affiliate", type: "address" },
        ],
        outputs: [],
      },
    ],
    functionName: "mintTo",
    args: [userAddress, amount, ZERO_ADDRESS],
  })

  return new Response(
    JSON.stringify({
      chainId: base.id,
      method: "eth_sendTransaction",
      params: {
        to: CONTRACT_ADDRESS,
        data: calldata,
        value: "0",
      },
      postUrl: "https://seninsite.com/api/success",
    }),
    { headers: { "Content-Type": "application/json" } }
  )
}