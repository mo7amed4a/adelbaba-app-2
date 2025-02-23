import HeroSection from '@/components/pages/home/HeroSection'
import ProductSection from '@/components/pages/home/productsSection';
import CategoriesSection from '@/components/pages/home/categoriesSection';
import SubHeader from '@/components/layouts/SubHeader';

export default async function Page() {
  
  return (
    <>
      <main>
        <SubHeader/>
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
      {/* <Footer/> */}
    </>
  )
}
