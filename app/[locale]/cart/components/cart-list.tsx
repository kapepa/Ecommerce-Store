"use client"

import { ProductInt } from "@/interface/product";
import { FC } from "react";
import { CartItem, CartItemSkeleton } from "./cart-item";
import { useTranslations } from "next-intl";


interface CartListProps {
  products: ProductInt[],
  disabled: boolean,
  onDelete: (id: string, index: number) => void
}

const CartList: FC<CartListProps> = (props) => {
  const { products, disabled, onDelete } = props
  const t = useTranslations('Cart');

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
            disabled={disabled}
            onDelete={onDelete.bind(null, product.id, index)}
          />
        ))}
        
      </ul>
    </>
  )
}

const CartListSkeleton: FC = () => {
  const skeletonCell = Array(2).fill(null);

  return <>
    {
      skeletonCell.map((_, index) => {
        return (
          <CartItemSkeleton
            key={`CartItemSkeleton-${index}`}
          />
        )
      })
    }
  </>
}

export { CartList, CartListSkeleton }