import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import localFont from "next/font/local";

import "./globals.css";

import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.className}>
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <ViewCanvas />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
