import { useTranslation as getTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ lng, path }: {
  lng: string;
  path?: string;
}) => {
  const { t, i18n } = await getTranslation(lng, 'footer')
  return <FooterBase i18n={i18n} lng={lng} path={path} />
}
