// "use client"

import { Container } from "@/components/ui/container";
// import { useCart } from "@/hooks/use-cart";
import { NextPage } from "next";
// import { useLayoutEffect, useState } from "react";
// import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";


const CartPage: NextPage = () => {
  // const [isMounted, setIsMounted] = useState<boolean>(false);
  // const cart = useCart();

  // useLayoutEffect(() => {
  //   if(!isMounted) setIsMounted(true);
  // },[isMounted, setIsMounted])

  // if (!isMounted) return null;

  return (
    <div>
      <Container>
        <div
          className="px-4 py-16 sm:px-6 lg:px-8"
        >
          <h1
            className="text-3xl font-bold"
          >
            Shopping Cart
          </h1>
          <div
            className="mt-12 lg:grid lg: grid-cols-12 lg: items-start gap-x-12"
          >
            {/* <div
              className="lg:col-span-7"
            >
              {
                cart.items.length === 0
                && <p className="text-neutral-500">No items added to cart.</p>
              }
              <ul>
                {cart.items.map((product, index) => (
                  <CartItem
                    key={`${product.id}-${index}`}
                    product={product}
                  />
                ))}
              </ul>
            </div>
            <Summary/> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage;