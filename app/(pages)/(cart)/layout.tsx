import { Button } from "@/components/ui/button";
import React from "react";

export const productsInCartData = [
  {
    id: 1,
    name: "Laptop v23 15.6 inch 9 generation core i7",
    category: "Digital Market",
    quantity: 1,
    price: 500,
    currency: "$",
    isFavorite: true,
    isChecked: true,
    image: "/icons/products/1.png",
  },
  {
    id: 2,
    name: "Men's Slim Fit Casual Lightweight Soft Waterproof Jacket",
    category: "Fashion House",
    quantity: 1,
    price: 500,
    currency: "$",
    isFavorite: true,
    isChecked: false,
    image: "/icons/products/1.png",
  },
  {
    id: 3,
    name: "Men's Slim Fit Casual Lightweight Soft Waterproof Jacket",
    category: "Fashion House",
    quantity: 1,
    price: 500,
    currency: "$",
    isFavorite: false,
    isChecked: false,
    image: "/icons/products/1.png",
  }
];

export default function layout({ children }: { children: React.ReactNode }) {
  const shipping = 50; // شحن
  const taxes = 50; // ضرائب

  const subtotal = productsInCartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  // الحساب الكلي
  const total = subtotal + shipping + taxes;

  return (
    <div className="my-20 grid lg:grid-cols-5 container mx-auto gap-x-10 px-4">
      <div className="space-y-4 lg:col-span-3">{children}</div>

      <div className="lg:col-span-2 relative">
        <div className="[&>*]:flex [&>*]:justify-between [&>*]:p-4 sticky top-24 end-0">
          <h1 className="text-lg md:text-xl font-bold">Order Summary</h1>
          <p>
            <span>Subtotal</span>
            <span>{subtotal}$</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>{shipping}$</span>
          </p>
          <p>
            <span>Taxes</span>
            <span>{taxes}$</span>
          </p>
          <p className="border-t border-gray-200">
            <span>Total</span>
            <span>{total}$</span>
          </p>
          {subtotal > 0 && (
            <Button color="primary" className="w-full">
              <span className="w-full text-center py-10">Check Out</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
