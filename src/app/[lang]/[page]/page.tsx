import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getDict } from "@/lib/dict";
import { buildMetadata } from "@/lib/meta";
import { LANGS, PAGES, isLang, type PageKey } from "@/lib/site";

type P = { params: Promise<{ lang: string; page: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => PAGES.map((page) => ({ lang, page })));

const isPage = (v: string): v is PageKey => (PAGES as readonly string[]).includes(v);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, page } = await params;
  if (!isLang(lang) || !isPage(page)) return {};
  const doc = getDict(lang).pages[page];
  return buildMetadata(lang, page, doc.metaTitle, doc.metaDesc);
}

export default async function Page({ params }: P) {
  const { lang, page } = await params;
  if (!isLang(lang) || !isPage(page)) notFound();
  return <LegalPage lang={lang} page={page} />;
}
