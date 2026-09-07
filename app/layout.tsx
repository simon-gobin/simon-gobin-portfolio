import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://simon-gobin-portfolio.gemma-simon-gobin.chatgpt.site",
  ),
  title: "Simon Gobin — Data, Investigation & AI",
  description:
    "Portfolio of Simon Gobin, an Apple fraud investigator, data analyst and AI builder based in Cork, Ireland.",
  openGraph: {
    title: "Simon Gobin — Data, Investigation & AI",
    description: "Investigation meets intelligence.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Gobin — Data, Investigation & AI",
    description: "Investigation meets intelligence.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
