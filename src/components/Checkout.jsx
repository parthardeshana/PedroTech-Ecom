import { useState } from "react";

export default function Checkout({ product}) {

  return (
    <>
      {
        <div key={product.id} className="group relative">
          <img
            alt={product.images[0]}
            src={product.images[0]}
            className="w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div className="mt-4 flex justify-between">
              <h2 className="text-md text-black-700" text-bold>
                <span />
                {product.title}
              </h2>
                <p className="mt-1 text-sm text-gray-500">₹{product.price}</p>
            </div>
        </div>
      }
    </>
  );
}
