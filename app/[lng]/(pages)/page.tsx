import { languages, fallbackLng } from '../../i18n/settings'
import { useTranslation as getTranslation } from '../../i18n'
import { Footer } from '../components/Footer'
import HeroSection from '@/components/pages/home/HeroSection'
import ProductSection from '@/components/pages/home/productsSection';
import CategoriesSection from '@/components/pages/home/categoriesSection';

export default async function Page({ params }: {
  params: Promise<{ lng: string }>
}) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await getTranslation(lng)

  return (
    <>
      <main>
        <HeroSection />
        <div>
          <CategoriesSection title="Shop From Top Categories" linkAll={`/categories`} isHome />
        </div>
        <div>
          <ProductSection title="Today" linkAll={`/products/today-deals`} />
          <ProductSection title="New Products" linkAll={`/products/new-products`} />
          <ProductSection title="Best Sellers" linkAll={`/products/best-sellers`} />
          <ProductSection title="Big Sale" linkAll={`/products/big-sale`} />
        </div>
      </main>
      <Footer lng={lng}/>
    </>
  )
}
