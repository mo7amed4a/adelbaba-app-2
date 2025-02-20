import CategoryCard from "@/components/categories/category";
import IconLeftAndRight from "@/components/global/IconLeftAndRight";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AxiosServer from "@/lib/axiosServer";
import { splitArrayInHalf, splitTitleInHalf } from "@/utils/splitArrayInHalf";
import Link from "next/link";
import React from "react";


interface CategoriesSectionProps {
  title: string;
  linkAll: string;
  isHome?: boolean
}

export default async function CategoriesSection({
  title,
  linkAll,
  isHome = false
}: CategoriesSectionProps) {
  const res = await AxiosServer.get('/customer/categories')
  const categories = res?.data?.categories;

  const [firstHalf, secondHalf] = splitArrayInHalf(categories);
  const [firstTitle, secondTitle] = splitTitleInHalf(title);
  
  return (
    <section className="py-12 bg-white dark:bg-gray-800 dark:text-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between text-start border-b border-b-gray-200">
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-400 border-b-2 border-primary flex gap-x-2 pb-2">
            <span>{firstTitle}</span>
            <span className="text-primary">
              {secondTitle}
            </span>
          </h2>
          <div className="flex items-center text-xs md:text-base">
            <Link
              href={linkAll}
              className="flex items-center hover:text-primary text-gray-500"
            >
              <span>View All</span>
             <IconLeftAndRight className="size-6 text-primary"/>
            </Link>
          </div>
        </div>
        {isHome ? <>
          <Carousel className="mt-8">
            <CarouselContent>
              {firstHalf.map((category) => (
                <CarouselItem key={category.id} className="basis-1/7">
                  <CategoryCard {...category} isHome={isHome} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel>
              <CarouselContent>
                {secondHalf.map((item) => (
                  <CarouselItem key={item.id} className="basis-1/7">
                    <CategoryCard {...item} isHome={isHome}/>
                  </CarouselItem>
                ))}
              </CarouselContent>
          </Carousel>
        </> : <>
        <div className="mt-10 flex flex-wrap justify-center">
          {categories.map((item: any) => (
            <div key={item.id} className="basis-1/6">
              <CategoryCard {...item}/>
            </div>
            ))}
        </div>
        </>}
      </div>
    </section>
  );
}
