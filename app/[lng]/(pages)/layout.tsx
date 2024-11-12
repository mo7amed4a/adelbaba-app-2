import "@/app/[lng]/global.css";

import { dir } from "i18next";
import HeaderApp from "@/components/layouts/Header";
import { fallbackLng, languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";
import FooterApp from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    lng: string;
  };
}) {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);
  return {
    title: t("title"),
    content:
      "A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Toaster />
        <HeaderApp />
        {children}
        <FooterApp />
      </body>
    </html>
  );
}
