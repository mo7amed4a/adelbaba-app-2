import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface ProductDetailsProps {
  id: number;
  image: string;
  images: {
    url: string;
    alt: string;
  }[];
  title: string;
  price: string;
  oldPrice?: string;
  category: string;
  rating: number;
  sale?: boolean;
  isCarousel?: boolean;
}

const productDetails: ProductDetailsProps = {
  id: 1,
  image: "/icons/products/1.png",
  title: "Laptop v23",
  price: "300$",
  oldPrice: "559$",
  rating: 3,
  category: "Electronics",
  sale: true,
  images: [
    {
      url: "/icons/products/1.png",
      alt: "alt",
    },
    {
      url: "/icons/products/2.png",
      alt: "alt",
    },
    {
      url: "/icons/products/3.png",
      alt: "alt",
    },
  ],
};
export default function page() {
  return (
    <div className="container px-4 mx-auto dark:text-white">
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:mt-12">
        <div className="lg:col-span-3">
          <div className="lg:flex lg:items-start gap-4">
            <div className="lg:order-2">
              <div className="3xl:size-[48rem] 4xl:size-[52rem] overflow-hidden rounded-lg">
                <Image
                  width={700}
                  height={700}
                  className="h-full w-full max-w-full object-contain"
                  src={`/icons/products/2-1.png`}
                  alt="alt"
                />
              </div>
            </div>
            <div className="mt-2 lg:order-1 lg:flex-shrink-0">
              <div className="flex flex-row items-start lg:flex-col">
                <button
                  type="button"
                  className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                >
                  <Image
                    width={700}
                    height={700}
                    className="h-full w-full object-cover"
                    src={`/icons/products/2-1.png`}
                    alt="alt"
                  />
                </button>
                <button
                  type="button"
                  className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                >
                  <Image
                    width={700}
                    height={700}
                    className="h-full w-full object-cover"
                    src={`/icons/products/2-1.png`}
                    alt="alt"
                  />
                </button>
                <button
                  type="button"
                  className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                >
                  <Image
                    width={700}
                    height={700}
                    className="h-full w-full object-cover"
                    src={`/icons/products/2-1.png`}
                    alt="alt"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:col-span-2">
          <section className="space-y-4 md:space-y-6 h-4/5">
            <div>
                <h5>{productDetails.category}</h5>
                <h1 className="sm:text-2xl font-bold md:text-3xl">
                    Afro-Brazillian Coffee
                </h1>
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`block size-3 align-middle ${
                        index < productDetails.rating
                            ? "text-yellow-500"
                            : "text-gray-400"
                        } sm:size-4`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ))}
                    {/* <p className="ml-2 text-sm font-medium text-gray-500">
                    1,209 Reviews
                    </p> */}
                </div>
            </div>
            <div className="flex gap-x-2 items-start">
                <span className="text-primary text-lg md:text-2xl font-bold">{productDetails.price}</span>
                <span className="text-gray-400 font-bold">{productDetails.oldPrice}</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold">Available Quantity</h2>
              <p className="text-gray-400">576 products</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold">Model Description</h2>
              <p className="text-gray-400 w-2/5">
                Laptop v23 15.6 inch 9th Gen Core i7, NVIDIA GTX 1650 Graphics
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold">Color</h2>
              <div className="flex select-none flex-wrap items-center gap-1">
                <label>
                  <input
                    type="radio"
                    name="type"
                    defaultValue="black"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <p className="bg-black peer-checked:ring-2 peer-checked:ring-primary size-6"></p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    defaultValue="red"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <p className="bg-gray-300 peer-checked:ring-2 peer-checked:ring-primary size-6"></p>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold">Quantity To Buy</h2>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(3)].map((_, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>
                      {index + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-600">Deliver to <span className="underline">EG</span></p>
            </div>
            <div className="flex items-center justify-between gap-x-4 ">
                
                <Button 
                type="button"
                variant={"default"}
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-none px-12 py-3 text-center text-base font-bold  transition-all duration-200 ease-in-out focus:shadow w-full"
                >
                Add to cart
                </Button>
                <Button variant="outline" className="border-primary">
                    <HeartIcon />
                </Button>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}
