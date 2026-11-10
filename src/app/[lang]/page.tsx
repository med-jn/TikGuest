import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "@/components/Home";
import { getDict } from "@/lib/dict";
import { isLang } from "@/lib/site";
import { buildMetadata } from "@/lib/meta";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const h = getDict(lang).home;
  return buildMetadata(lang, undefined, h.metaTitle, h.metaDesc);
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Home lang={lang} />;
}
