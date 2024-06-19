"use client"

import { BoardColor } from "@/components/board-color";
import Currency from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductInt } from "@/interface/product";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CartItemProps {
  product: ProductInt,
  disabled: boolean,
  onDelete: () => void,
}

const CartItem: FC<CartItemProps> = (props) => {
  const { product, disabled, onDelete } = props;

  return (
    <li
      className="flex flex-col gap-y-4 items-center fle py-6 border-b relative md:flex-row md:items-start md:gap-0"
    >
      <div
        className="relative rounded-md overflow-hidden h-60 w-60 md:h-36 md:w-36"
      >
        <Image
          fill
          src={product.image[0].url}
          alt=""
          sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
          className="object-cover object-center"
          priority={true}
        />
      </div>
      <div
        className="relative ml-0 flex flex-1 flex-col justify-between sm:ml-6"
      >
        <div
          className="relative pr-0 sm:grid sm:grid-cols-1 h-full md:grid-cols-2 md:pr-9"
        >
          <div
            className="flex flex-col justify-between"
          >
            <p
              className="text-lg font-semibold"
            >
              {product.ruName ?? product.uaName}
            </p>
            <Currency
              values={product.price}
            />
          </div>
          <div
            className="mt-1 flex flex-row gap-5 text-sm pr-0 md:pr-9 md:flex-col"
          >
            <div
              className="flex flex-col items-center gap-y-2"
            >
              <p
                className="text-gray-500"
              >
                {product.color.ruName ?? product.uaName}

              </p>
              <BoardColor
                url={product.color.url}
              />
            </div>
            <div
              className="flex flex-col items-center gap-y-2"
            >
              <p
                className="text-gray-500"
              >
                {product.size.ruName ?? product.uaName}
              </p>
              <p
                className="text-gray-500"
              >
                {product.size.value}
              </p>   
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute z-10 right-0 top-5"
      >
        <IconButton 
          icon={<X size={15} />}
          onClick={onDelete}
          disabled={disabled}
        />
      </div>
    </li>
  )
}

const CartItemSkeleton: FC = () => {
  return (
    <li
      className="flex flex-col gap-y-4 items-center fle py-6 border-b relative md:flex-row md:items-stretch md:gap-0"
    >
      <Skeleton
        className="relative rounded-md overflow-hidden h-60 w-60 md:h-36 md:w-36"
      />
      <div
        className="relative ml-0 flex flex-1 flex-col justify-between sm:ml-6"
      >
        <div
          className="relative pr-0 sm:grid sm:grid-cols-1 h-full md:grid-cols-2 md:pr-9"
        >
          <div
            className="flex flex-col justify-between"
          >
            <Skeleton
              className="h-7"
            />
            <Skeleton
              className="h-7 w-28"
            />
          </div>
          <div
            className="mt-1 flex flex-row gap-5 text-sm pr-0 md:pr-9 md:flex-col"
          >
            <div
              className="flex flex-col items-center gap-y-2"
            >
              <Skeleton
                className="h-5 w-24"
              />
              <Skeleton
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div
              className="flex flex-col items-center gap-y-2"
            >
              <Skeleton
                className="h-5 w-24"
              />
              <Skeleton
                className="h-5 w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export { CartItem, CartItemSkeleton }