import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface categoryCardProps {
  id: number;
  image: string;
  title: string;
  isHome?: boolean
}

const CategoryCard: React.FC<categoryCardProps> = ({ id, image, title, isHome }) => {
  return (
    <Link href={`/categories/${title}/`}>
      <article className="relative">
        <div className="flex items-start justify-between">
          <div className={`w-full ${isHome ? "p-10" : "p-4"} flex flex-col justify-center items-center`}>
            <div className="mb-8 border border-primary rounded-full p-4 h-28 w-28 bg-gray-100 flex justify-center items-center">
              <Image
                height={200}
                width={200}
                className="object-center object-contain h-24 w-24"
                src={image}
                alt={title}
              />
            </div>
            <div className="text-center">
              <h2 className="text-base text-gray-600 mb-2">{title}</h2>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;
