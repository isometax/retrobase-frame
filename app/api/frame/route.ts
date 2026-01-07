export async function GET() {
  return new Response(
    `
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://bafybeiajugqh66ryn2qxczfk4dmlt46nw6ujjougk3jzow344olbooi5za.ipfs.w3s.link/?n2m=banner.webp" />

    <meta property="fc:frame:button:1" content="Mint 1" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="https://seninsite.com/api/mint?amount=1" />

    <meta property="fc:frame:button:2" content="Mint 5" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="https://seninsite.com/api/mint?amount=5" />

    <meta property="fc:frame:button:3" content="Mint 10" />
    <meta property="fc:frame:button:3:action" content="post" />
    <meta property="fc:frame:button:3:target" content="https://seninsite.com/api/mint?amount=10" />
    `,
    { headers: { "Content-Type": "text/html" } }
  )
}