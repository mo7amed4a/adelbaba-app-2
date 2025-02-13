import { dir } from "i18next";
import HeaderApp from "@/components/layouts/Header";
import { fallbackLng, languages } from "@/app/i18n/settings";
import { useTranslation as getTranslation } from "@/app/i18n";
import FooterApp from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import NextTopLoader from "nextjs-toploader";
import { ChatPageDrawer } from "./(chat)/chat/page";
import { authOptions } from "@/utils/authOptions";

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
  params: {
    lng: string;
  };
}) {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  
  if (!session) {
    // redirect("/auth/login");
  }
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <NextTopLoader color="var(--primary)" />
        <Toaster />
        <HeaderApp lng={lng} />
        {children}
        <ChatPageDrawer />
        <FooterApp />
      </body>
    </html>
  );
}
