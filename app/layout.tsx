import type { ReactNode } from "react";

export const metadata = {
  title: "OpenSea.io",
  description: "OpenSea claim page"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
