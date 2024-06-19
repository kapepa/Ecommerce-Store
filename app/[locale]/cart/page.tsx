"use client"

import { Container } from "@/components/ui/container";
import { NextPage } from "next";
import { Summary, SummarySkeleton } from "./components/summary";
import { CartList, CartListSkeleton } from "./components/cart-list";
import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { getCart } from "@/actions/get-cart";
import { ProductInt } from "@/interface/product";
import { useParams } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";

const CartPage: NextPage = () => {
  const t = useTranslations('Cart');
  const tPC = useTranslations('ProductCard');
  const { locale } = useParams();
  const { ids, removeId } = useCart();
  const [isPending, startTransition] = useTransition()
  const [products, setProducts] = useState<ProductInt[] | null>(null);

  useEffect(() => {
    startTransition(() => {
      getCart({ ids, locale })
      .then((products) => setProducts(products))
      .catch(() => {})
    })
  }, [ids, locale]);

  const onDelete = (id: string, index: number) => {
    startTransition(() => {
      const excludeProducts = products?.concat();
      excludeProducts?.splice(index, 1);
      if ( excludeProducts ) {
        setProducts(excludeProducts);
        removeId(id);
        toast.success(tPC("ItemRemovedFromTheCart"))
      }
    })
  }

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
              {
                products === null
                ? <CartListSkeleton/>
                : <CartList
                    products={products}
                    disabled={isPending}
                    onDelete={onDelete}
                  />
              }
            </div>
            <>
              {
                products === null
                ? <SummarySkeleton/>
                : <Summary
                    products={products}
                    disabled={isPending}
                  /> 
              }
            </>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage;