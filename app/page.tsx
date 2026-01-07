import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Retrobase Frame</title>
        <meta
          name="description"
          content="Mint your retro pixel NFT on Base"
        />

        {/* Open Graph görseli */}
        <meta
          property="og:image"
          content="https://retrobase-cards.nfts2.me/api/image/1042837497527936355385278742332698144974027353552"
        />

        {/* Farcaster Frame meta tag'ları */}
        <meta name="fc:frame" content="true" />
        <meta
          name="fc:frame:image"
          content="https://retrobase-cards.nfts2.me/api/image/1042837497527936355385278742332698144974027353552"
        />
        <meta name="fc:frame:button:1" content="Mint" />
        <meta
          name="fc:frame:post_url"
          content="https://retrobase-frame.vercel.app/api/mint"
        />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🎮 Retrobase Frame aktif!</h1>
        <p>
          Bu sayfa Farcaster Frame olarak yapılandırılmıştır. Mint için Frame
          üzerinden butona basın.
        </p>
      </main>
    </>
  );
}
