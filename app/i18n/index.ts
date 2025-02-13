import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (lng:any, ns: any) => {
  // Create a new instance for each render on the server side
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language:any) => import(`./locales/${language}.json`))) // كل لغة في ملف واحد
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation(lng:any, ns?:any, options:any = {}) {
  const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? ns : ns)
  return {
    t: Array.isArray(ns) ? i18nextInstance.getFixedT(lng, ns[0], options.keyPrefix) : i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}