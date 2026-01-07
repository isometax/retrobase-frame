export async function GET() {
  return new Response(
    `
    <meta property="fc:frame:image" content="https://sandbox:/generated-image.png" />
    `,
    { headers: { "Content-Type": "text/html" } }
  )
}