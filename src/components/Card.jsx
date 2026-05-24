import { useState } from "react";

export default function Card({ product, cart, setCart }) {

  return (
    <>
      {
        <div key={product.id} className="group relative">
          <img
            alt={product.images[0]}
            src={product.images[0]}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div className="mt-4 flex justify-between">
            <div>
              <h2 className="text-md text-black-700" text-bold>
                <span />
                {product.title}
              </h2>
              <div className="mt-1 text-sm text-gray-500 flex justify-between">
                <p className="mt-1 text-sm text-gray-500">₹ {product.price}</p>
                <button onClick={() => {
                  setCart((prev)=> [...prev, product.id])
                  setCart((prev) => [...new Set(prev)]);
                }
                  }> Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
