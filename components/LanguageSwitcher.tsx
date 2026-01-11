"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "pt"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1];

  function switchLocale(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex gap-2 text-xs">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`uppercase ${
            currentLocale === locale
              ? "text-neutral-900 font-medium"
              : "text-neutral-400 hover:text-neutral-700"
          }`}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
