import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aryamaan-dash.vercel.app"),
  title: {
    default: "Aryamaan Dash",
    template: "%s | Aryamaan Dash",
  },
  description:
    "Portfolio for Aryamaan Dash, a UC Irvine computer science and engineering student interested in embedded systems, machine learning, and autonomous robotics.",
  openGraph: {
    title: "Aryamaan Dash",
    description:
      "Projects in embedded systems, machine learning models, robotics, and study tools.",
    url: "https://aryamaan-dash.vercel.app",
    siteName: "Aryamaan Dash",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var theme=localStorage.getItem("theme");document.documentElement.dataset.theme=theme==="dark"?"dark":"light"}catch{document.documentElement.dataset.theme="light"}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
