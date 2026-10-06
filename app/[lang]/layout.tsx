import type { Metadata } from "next";
import { direction, htmlLanguage, isPublic, publicRouteCodes } from "../../src/i18n/Language.gen";
import { pageMetadata } from "../../src/i18n/Messages.gen";
import { requireRouteLanguage } from "../../src/adapters/next/language";
import "../globals.css";

export function generateStaticParams() {
  return publicRouteCodes().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const language = requireRouteLanguage((await params).lang);
  return {
    ...pageMetadata(language),
    ...(isPublic(language) ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const language = requireRouteLanguage((await params).lang);
  return (
    <html lang={htmlLanguage(language)} dir={direction(language)}>
      <body>{children}</body>
    </html>
  );
}
