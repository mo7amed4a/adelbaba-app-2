import '@/app/[lng]/global.css'

import { dir } from 'i18next'
import { fallbackLng, languages } from '@/app/i18n/settings';
import { useTranslation as getTranslation } from '@/app/i18n';

export async function generateMetadata({ params }: { params: { lng: string } }) {
  let lng = params.lng // لا حاجة لاستخدام await هنا
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await getTranslation(lng)
  return {
    title: t('title'),
    content: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const lng = params.lng // لا حاجة لاستخدام await هنا أيضًا
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
