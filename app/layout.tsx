import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://simon-gobin-portfolio.vercel.app",
  ),
  title: "Simon Gobin — Technical Investigation, Data & AI",
  description:
    "Technical investigator using data and AI to identify patterns, uncover root causes and improve complex systems.",
  openGraph: {
    title: "Simon Gobin — Technical Investigation, Data & AI",
    description:
      "Technical investigator using data and AI to identify patterns, uncover root causes and improve complex systems.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Gobin — Technical Investigation, Data & AI",
    description:
      "Technical investigator using data and AI to identify patterns, uncover root causes and improve complex systems.",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
