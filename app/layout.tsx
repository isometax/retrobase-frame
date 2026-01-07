import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
