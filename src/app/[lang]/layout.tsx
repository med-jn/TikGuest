import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { getDict } from "@/lib/dict";
import { LANGS, isLang, siteUrl } from "@/lib/site";
import "../globals.css";

const plex = localFont({
  src: [
    { path: "../../../public/fonts/Plex-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Plex-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../../public/fonts/Plex-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plex",
});

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  applicationName: "TikGuest",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const d = getDict(lang);
  return (
    <html lang={lang} dir={d.dir} className={plex.variable}>
      <body>{children}</body>
    </html>
  );
}
