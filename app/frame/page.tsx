import Head from "next/head";

export default function FramePage() {
  return (
    <>
      <Head>
        <title>Retrobase Frame</title>
        <meta name="description" content="Mint your retro pixel NFT on Base" />
        <meta name="fc:frame" content="true" />
        <meta name="fc:frame:image" content="https://retrobase-frame.netlify.app/nft.png" />
        <meta name="fc:frame:button:1" content="Mint" />
        <meta name="fc:frame:post_url" content="https://retrobase-frame.netlify.app/api/mint" />
        <meta property="og:title" content="Retrobase Frame" />
        <meta property="og:description" content="Mint your retro pixel NFT on Base" />
        <meta property="og:image" content="https://retrobase-frame.netlify.app/nft.png" />
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🎮 Retrobase Frame aktif!</h1>
        <p>Bu sayfa Farcaster Frame olarak yapılandırılmıştır. Mint için Frame üzerinden butona basın.</p>
      </main>
    </>
  );
}
