import { ProductCardProps } from "@/components/products/product";
import ProductAccountOrder from "@/components/products/product-account-order";

export interface ProductOrderType  extends ProductCardProps {
  order: boolean
}

const productsData: ProductOrderType[] = [
  {
    id: 1,
    image: "/icons/products/1.png",
    title: "Laptop v23",
    price: "300$",
    oldPrice: "559$",
    rating: 4,
    category: "Electronics",
    sale: true,
    order: true
  },
  {
    id: 2,
    image: "/icons/products/2.png",
    title: "Airpods pro",
    price: "300$",
    oldPrice: "559$",
    rating: 4,
    category: "Electronics",
    sale: true,
    order: false
  },
  {
    id: 3,
    image: "/icons/products/3.png",
    title: "instax camera",
    price: "300$",
    oldPrice: "559$",
    rating: 4,
    category: "Electronics",
    sale: true,
    order: true
  },
  {
    id: 4,
    image: "/icons/products/4.png",
    title: "Ipad pro",
    price: "300$",
    oldPrice: "559$",
    rating: 4,
    category: "Electronics",
    sale: true,
    order: false
  },
  {
    id: 5,
    image: "/icons/products/5.png",
    title: "Macbook",
    price: "300$",
    oldPrice: "559$",
    rating: 4,
    category: "Electronics",
    sale: true,
    order: true
  },
  {
    id: 6,
    image: "/icons/products/6.png",
    title: "smart charger",
    price: "300$",
    oldPrice: "559$",
    rating: 4,
    category: "Electronics",
    sale: true,
    order: false
  },
];

export default async function page() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="mt-5 md:mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
            ...productsData,
            ...productsData.reverse(),
            ...productsData.reverse(),
            ...productsData.reverse(),
          ].map((item) => (
            <div key={item.id + Math.random()}>
              <ProductAccountOrder product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
