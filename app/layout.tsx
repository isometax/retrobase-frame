import "./globals.css";

export const metadata = {
  title: "Retrobase Frame",
  description: "Mint your retro pixel NFT on Base",
  other: {
    "fc:frame": "true",
    "fc:frame:image":
      "https://retrobase-cards.nfts2.me/api/image/1042837497527936355385278742332698144974027353552",
    "fc:frame:button:1": "Mint",
    "fc:frame:post_url": "https://retrobase-frame.vercel.app/api/mint",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
