"use client"

import { ProductInt } from "@/interface/product";
import Image from "next/image";
import { FC, MouseEvent } from "react";
import { IconButton } from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { Skeleton } from "./skeleton";

interface ProductCardProps {
  product: ProductInt,
  locale: string,
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product, locale } = props;
  const router = useRouter();
  const preview = usePreviewModal();
  const { ids, addId } = useCart();
  const t = useTranslations('ProductCard');

  const handleClick = () => {
    router.push(`/${locale}/product/${product.id}`);
  }

  const onPreview = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    preview.onOpne(product);
  }

  const onAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (ids.includes(product.id)) return toast.success(t("ItemAlreadyInCart"));
    addId(product.id)
    toast.success(t("ItemAddedToCart"))
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-xl border p-3"
    >
      <div
        className="aspect-square rounded-xl bg-gray-100 relative"
      >
        <Image
          src={product.image[0].url}
          fill
          alt="image"
          className="aspect-square object-cover rounded-md"
          sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
        />
        <div 
          className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"
        >
          <div
            className="flex gap-x-6 justify-center"
          >
            <IconButton
              onClick={onPreview}
              className="bg-bgBoard"
              icon={
                <Expand
                  size={20}
                  className="text-textBoard"
                />
              }
            />
            <IconButton
              onClick={onAddToCart}
              className="bg-bgBoard"
              icon={
                <ShoppingCart
                  size={20}
                  className="text-textBoard"
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
          {product.ruName ?? product.uaName}
        </p>
        <p
          className="text-sm text-gray-500"
        >
          {product.category.ruName ?? product.category.uaName}
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

const ProductCardSkeleton: FC = () => {
  return (
    <div
      className="group cursor-pointer rounded-xl border p-3"
    >
      <Skeleton
        className="aspect-square rounded-xl relative"
      />

      <div>
      <div
        className="flex gap-x-6 justify-center"
      ></div>
        <Skeleton
          className="w-[50%] h-5 mt-2"
        />
        <Skeleton
          className="w-[30%] h-4 mt-2"
        />
      </div>
      <div
        className="flex items-center justify-between"
      >
        <Skeleton
          className="w-[40%] h-5 mt-2"
        />
      </div>
    </div>
  )
}

export { ProductCard, ProductCardSkeleton }