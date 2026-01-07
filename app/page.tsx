export const metadata = {
  title: "Retrobase Frame",
  description: "Mint your retro pixel NFT on Base",
  openGraph: {
    images: ["https://retrobase-frame.vercel.app/retro.png"],
  },
  other: {
    "fc:frame": "true",
    "fc:frame:image": "https://retrobase-frame.vercel.app/retro.png",
    "fc:frame:button:1": "Mint",
    "fc:frame:post_url": "https://retrobase-frame.vercel.app/api/mint",
  },
};

export default function Page() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎮 Retrobase Frame aktif!</h1>
      <p>Bu sayfa Farcaster Frame olarak yapılandırılmıştır. Mint için Frame butonuna basın.</p>
    </main>
  );
}
