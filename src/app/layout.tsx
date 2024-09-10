import type { Metadata } from "next";
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

// Font files can be colocated inside of `app`
const GothamBook = localFont({
  src: [
    {
      path: '../../public/fonts/gotham/Gotham-Book.woff',
      weight: '500',
      style: 'normal'
    },
  ],
  display: 'swap',
  variable: '--font-GothamBook'
})
const Americana = localFont({
  src: [
    {
      path: '../../public/fonts/americana/AmericanaBT-Bold.woff',
      weight: '700',
      style: 'normal'
    },
  ],
  display: 'swap',
  variable: '--font-americana-bold'
})

export const metadata: Metadata = {
  title: "Marcon Tailor",
  description: "Thanks for visiting us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="has-[div[data-intro-visible=true]]:overflow-hidden has-[div[data-popup-open=true]]:overflow-hidden scroll-smooth">
      <GoogleTagManager gtmId="GTM-NXGTHLD" />
      <body className={`${GothamBook.className} ${GothamBook.variable} ${Americana.variable} bg-tertiary`}>
        {children}
      </body>
    </html>
  );
}
