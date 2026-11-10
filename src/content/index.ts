import type { Lang } from "@/lib/i18n";
import type { Dict } from "./types";
import ar from "./ar";
import fr from "./fr";
import en from "./en";

const all: Record<Lang, Dict> = { ar, fr, en };
export const getDict = (l: Lang): Dict => all[l];
