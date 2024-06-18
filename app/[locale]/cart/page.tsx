"use client"

import { Container } from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";
import { NextPage } from "next";
import { FC, Suspense, useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";
import { useTranslations } from "next-intl";
import { getCart } from "@/actions/get-cart";
import { CartList } from "./components/cart-list";

const Load: FC = () => <div className="text-red-600 text-lg">LOADING</div>

const CartPage: NextPage = () => {
  const { ids } = useCart();
  const t = useTranslations('Cart');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if(!isMounted) setIsMounted(true);
  },[isMounted, setIsMounted]);

  if (!isMounted) return null;

  return (
    <div>
      <Container>
        <div
          className="px-4 py-16 sm:px-6 lg:px-8"
        >
          <h1
            className="text-3xl font-bold"
          >
            {t("ShoppingCart")}
          </h1>
          <div
            className="mt-6 gap-x-12 lg:items-start md:mt-12 lg:grid lg:grid-cols-12"
          >
            <div
              className="lg:col-span-7"
            >
              <CartList ids={ids} />
            </div>

            {/* <div
              className="lg:col-span-7"
            >
              {
                ids.length === 0 && (
                  <p className="text-neutral-500">
                    {t("NoItemsAddedToCart")}
                  </p>
                )
              }
              <ul>
                {products.items.length > 0 && products.items.map((product, index) => (
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