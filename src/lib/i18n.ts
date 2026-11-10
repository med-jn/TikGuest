export const langs = ["ar", "fr", "en"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "ar";
export const dirOf = (l: Lang) => (l === "ar" ? "rtl" : "ltr");
export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);
export const langNames: Record<Lang, string> = { ar: "العربية", fr: "Français", en: "English" };
export const pages = ["regles", "conditions", "privacy", "delete-account"] as const;
export type PageKey = (typeof pages)[number];
export const isPage = (v: string): v is PageKey => (pages as readonly string[]).includes(v);
