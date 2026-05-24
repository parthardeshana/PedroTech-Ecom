import { useEffect, useState } from "react";
import Card from "../components/Card";
import Checkout from "../components/Checkout";
import products from "../data/products";

const Home = () => {

     const [cart, setCart] = useState([]);
     const [cartProducts, setCartProducts] = useState([]);

  console.log("v", cart);

useEffect(() => {
  console.log("cart updated", cart);
  const cartProducts = products.filter((p)=> cart.includes(p.id))
  setCartProducts(cartProducts);
}, [cart]);

  return (
    <div className="bg-white mx-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"></div>
      <div className="mt-1 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
        <h1 className="mt-40">Cart Listting</h1>
        <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {cartProducts?.map((product) => (
      <Checkout product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
