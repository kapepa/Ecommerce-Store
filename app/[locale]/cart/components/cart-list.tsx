"use client"

import { getCart } from "@/actions/get-cart";
import { ProductInt } from "@/interface/product";
import { FC, useEffect, useState, useTransition } from "react";
import { CartItem } from "./cart-item";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface CartListProps {
  ids: string[];
}

const CartList: FC<CartListProps> = (props) => {
  const { ids } =  props;
  const { locale } = useParams();
  const t = useTranslations('Cart');
  const [isPending, startTransition] = useTransition()
  const [products, setProducts] = useState<ProductInt[] | null>(null);

  useEffect(() => {
    startTransition(() => {
      getCart({ ids, locale })
      .then((products) => setProducts(products))
      .catch(() => {})
    })
  }, [getCart]);

  // if (isPending) {
  //   return 
  // }

  return (
    <>
      {
        !!products && products.length === 0 && (
          <p className="text-neutral-500">
            {t("NoItemsAddedToCart")}
          </p>
        )
      }
      <ul>
        {!!products && products.length > 0 && products.map((product, index) => (
          <CartItem
            key={`${product.id}-${index}`}
            product={product}
          />
        ))}
      </ul>
    </>
  )
}

export { CartList }