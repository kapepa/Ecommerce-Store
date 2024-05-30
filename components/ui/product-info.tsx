"use client"

import { ProductInt } from "@/interface/product"
import { FC } from "react"
import Currency from "./currency";
import { Button } from "./Button";
import { ShoppingCart } from "lucide-react";
import { BoardColor } from "../board-color";

interface ProductInfoProps {
  product: ProductInt | null,
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const { product } = props;

  if(!product) return null;

  return (
    <div>
      <h1
        className="text-3xl font-bold text-background"
      >
        {product.name}
      </h1>
      <div
        className="mt-3 flex items-end justify-between"
      >
        <p
          className="text-2xl text-background"
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
            className="font-semibold text-background"
          >
            Size:
          </h3>
          <div>
            {product.size.value}
          </div>
        </div>
        <div
          className="flex items-center gap-x-4"
        >
          <h3
            className="font-semibold text-background"
          >
            Color:
          </h3>
          <BoardColor
            url={product.color.url}
          />
        </div>
        <div
           className="flex items-center gap-x-4"
        >
          <p>{product.description}</p>
        </div>
        <div
          className="mt-10 flex items-center gap-x-3"
        >
          <Button
            className="flex items-center gap-x-2"
          >
            <ShoppingCart/>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export { ProductInfo }