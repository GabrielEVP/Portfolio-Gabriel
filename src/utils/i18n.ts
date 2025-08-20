const SUPPORTED_LANGS = ["es", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function resolveLang(input?: string | null): Lang {
   return input && SUPPORTED_LANGS.includes(input as Lang) ? (input as Lang) : "es";
}

export async function loadSectionData<T = any>(section: string, lang: Lang): Promise<T> {
   const mod = await import(`../data/${lang}/${section}.json`);
   return mod.default as T;
}

export function buildLangUrl(currentUrl: URL, code: Lang): string {
   const baseUrl = currentUrl.origin + currentUrl.pathname;
   return `${baseUrl}?lang=${code}`;
}
