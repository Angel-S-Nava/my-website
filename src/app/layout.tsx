// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/app/components/Analytics";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Angel Nava — Digital Marketing & Web Development",
    template: "%s | Angel Nava",
  },
  description:
    "Angel Nava — Freelance digital marketer and web developer focused on measurable growth, e-commerce, and high-converting websites.",
  // keep other metadata as you like
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

        <Script id="init-dataLayer" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
        </Script>

        {GTM_ID ? (
          <Script id="gtm-head" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        ) : null}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {GTM_ID ? (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        ) : null}

        {/* Push SPA pageviews to dataLayer */}
        <Analytics />

        {children}
      </body>
    </html>
  );
}
