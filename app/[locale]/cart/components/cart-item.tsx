"use client"

import Currency from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { ProductInt } from "@/interface/product";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CartItemProps {
  product: ProductInt,
}

const CartItem: FC<CartItemProps> = (props) => {
  const { product } = props;
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(product.id)
  }

  return (
    <li
      className="flex py-6 border-b"
    >
      <div
        className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48"
      >
        <Image
          fill
          src={product.image[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div
        className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6"
      >
        <div
          className="absolute z-10 right-0 top-0"
        >
          <IconButton 
            icon={<X size={15} />}
            onClick={onRemove}
          />
        </div>
        <div
          className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
        >
          <div
            className="flex justify-between"
          >
            <p
              className="text-lg font-semibold"
            >
              {product.ruName ?? product.uaName}
            </p>
          </div>
          <div
            className="mt-1 flex  text-sm"
          >
            <p
              className="text-gray-500"
            >
              {product.color.ruName ?? product.uaName}
            </p>
            <p
              className="text-gray-500 ml-4 border-l border-gray-200 pl-4"
            >
              {product.size.ruName ?? product.uaName}
            </p>           
          </div>
          <Currency
            values={product.price}
          />
        </div>
      </div>
    </li>
  )
}

export { CartItem }