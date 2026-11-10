import type { Lang } from "@/lib/site";

export type Section = { id: string; title: string; p?: string[]; ul?: string[]; after?: string[] };

export type Legal = {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  sections: Section[];
};

export type Dict = {
  lang: Lang;
  dir: "rtl" | "ltr";
  locale: string; // BCP-47 for dates / og
  langName: string;
  nav: {
    home: string;
    rules: string;
    terms: string;
    privacy: string;
    deleteAccount: string;
    menu: string;
  };
  common: {
    updated: string;
    toc: string;
    backHome: string;
    contactUs: string;
    notAffiliated: string;
    rights: string;
    languages: string;
    skip: string;
  };
  home: {
    metaTitle: string;
    metaDesc: string;
    badge: string;
    title: string;
    titleAccent: string;
    sub: string;
    ctaPlay: string;
    ctaSoon: string;
    ctaHow: string;
    micAlt: string;
    stepsTitle: string;
    steps: { t: string; d: string }[];
    featuresTitle: string;
    features: { t: string; d: string }[];
    trustTitle: string;
    trustIntro: string;
    trust: string[];
    trustNote: string;
    permTitle: string;
    permIntro: string;
    perms: { t: string; d: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
    finalTitle: string;
    finalSub: string;
    legalTitle: string;
    legalLinks: { key: "regles" | "conditions" | "privacy" | "delete-account"; d: string }[];
  };
  pages: {
    regles: Legal;
    conditions: Legal;
    privacy: Legal;
    "delete-account": Legal;
  };
};
