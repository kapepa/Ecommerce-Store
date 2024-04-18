"use client"

import { ProductInt } from "@/interface/product";
import Image from "next/image";
import { FC, MouseEvent } from "react";
import { IconButton } from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { PreviewModal } from "../preview-modal";
import { usePreviewModal } from "@/hooks/use-preview-modal";

interface ProductCardProps {
  product: ProductInt,
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;
  const router = useRouter();
  const preview = usePreviewModal()

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  }

  const onPreview = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    preview.onOpne(product);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3"
    >
      <div
        className="aspect-square rounded-xl bg-gray-100 relative"
      >
        <Image
          src={product.image[0].url}
          fill
          alt="image"
          className="aspect-square object-cover rounded-md"
        />
        <div 
          className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"
        >
          <div
            className="flex gap-x-6 justify-center"
          >
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className="text-gray-600"
                />
              }
            />
                        <IconButton
              onClick={() => {}}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                />
              }
            />
          </div>
        </div>
      </div>
      <div>
        <p
          className="font-semibold text-lg"
        >
          {product.name}
        </p>
        <p
          className="text-sm text-gray-500"
        >
          {product.category.name}
        </p>
      </div>
      <div
        className="flex items-center justify-between"
      >
        <Currency
          values={product.price}
        />
      </div>
    </div>
  )
}

export { ProductCard }