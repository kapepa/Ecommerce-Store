"use client"

import { ProductInt } from "@/interface/product"
import { FC, useLayoutEffect, useState } from "react"
import Currency from "./currency";
import { Button } from "./Button";
import { ShoppingCart } from "lucide-react";
import { BoardColor } from "../board-color";
import { useTranslations } from "next-intl";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";

interface ProductInfoProps {
  product: ProductInt | null,
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const { product } = props;
  const t = useTranslations("Product");
  const tCard = useTranslations("ProductCard");
  const { ids, addId, removeId } = useCart();
  const [inCart, setInCart] = useState<boolean>(false);

  if(!product) return null;

  useLayoutEffect(() => {
    setInCart(ids.includes(product.id));
  }, [ids, product])

  const toggleGoods = () => {
    if (inCart) {
      removeId(product.id);
      toast.success(tCard("ItemRemovedFromTheCart"));
    }
    else {
      addId(product.id)
      toast.success(tCard("ItemAddedToCart"));
    }
  }

  return (
    <div>
      <h1
        className="text-3xl font-bold text-foreground"
      >
        {product.ruName ?? product.uaName}
      </h1>
      <div
        className="mt-3 flex items-end justify-between"
      >
        <p
          className="text-2xl text-foreground"
        >
          <Currency 
            values={product.price}
          />
        </p>
      </div>
      <hr
        className="my-4"
      />
      <div
        className="flex flex-col gap-y-6"
      >
        <div
          className="flex items-center gap-x-4"
        >
          <h3
            className="font-semibold text-foreground"
          >
            {t("Size")}:
          </h3>
          <div>
            {product.size.value}
          </div>
        </div>
        <div
          className="flex items-center gap-x-4"
        >
          <h3
            className="font-semibold text-foreground"
          >
            {t("Color")}:
          </h3>
          <BoardColor
            url={product.color.url}
          />
        </div>
        <div
           className="flex items-center gap-x-4"
        >
          <p>{product.ruDescription ?? product.uaDescription}</p>
        </div>
        <div
          className="mt-10 flex items-center gap-x-3"
        >
          <Button
          onClick={toggleGoods}
            className="flex items-center gap-x-2"
          >
            <ShoppingCart/>
            { inCart ? t("RemoveFromCart") : t("AddToCart")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export { ProductInfo }