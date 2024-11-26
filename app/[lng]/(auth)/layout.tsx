import { dir } from "i18next";
import { fallbackLng, languages } from "@/app/i18n/settings";
import { useTranslation as getTranslation } from "@/app/i18n";
import HeaderApp from "@/components/layouts/Header";

type ParamsLayoutType = Promise<{ lng: string }>;

export async function generateMetadata({
  params,
}: {
  params: ParamsLayoutType;
}) {
  let lng = (await params).lng;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await getTranslation(lng);
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
  params: ParamsLayoutType;
}) {
  const lng = (await params).lng;
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <HeaderApp lng={lng} />
        <div className="[&>*]:h-full h-screen min-h-screen">{children}</div>
      </body>
    </html>
  );
}
