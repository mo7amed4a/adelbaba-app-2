import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductPrimary() {
  return (
    <article className="relative flex flex-col overflow-hidden border">
      <div className="aspect-square overflow-hidden">
        <Image width={200} height={200}
          className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={`/icons/products/1.png`}
          alt="Product"
        />
      </div>
      {/* <div class="absolute top-0 m-2 rounded-full bg-white">
    <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
  </div> */}
      <div className="my-4 mx-auto flex  w-full px-3 flex-col items-start justify-between">
        <div className="flex justify-between w-full">
          <h3>Electron</h3>
          <span>k</span>
        </div>
        <div>
          <h3>Title</h3>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <del className="text-xs text-gray-400"> $79.00 </del>
            <p className="ms-1 text-base font-semibold text-primary">$99.00</p>
          </div>
          <Button>
            <ShoppingCart />
            Add To Cart</Button>
         
        </div>
      </div>
    </article>
  );
}
