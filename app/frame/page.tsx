export const metadata = {
  title: "Retrobase Frame",
  description: "Mint your retro pixel NFT on Base",
  other: {
    "fc:frame": "true",
    "fc:frame:image": "https://retrobase-frame.vercel.app/nft.png",
    "fc:frame:button:1": "Mint",
    "fc:frame:post_url": "https://retrobase-frame.vercel.app/api/mint",
  },
};

export default function FramePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎮 Retrobase Frame aktif!</h1>
      <p>Bu sayfa Farcaster Frame olarak yapılandırılmıştır. Mint için Frame üzerinden butona basın.</p>
    </main>
  );
}
