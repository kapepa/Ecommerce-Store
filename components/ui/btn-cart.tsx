"use client"

import { FC } from "react";
import { Button } from "./Button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";


interface BtnCartProps {
  locale: string | string[],
  className?: string,
}

const BtnCart: FC<BtnCartProps> = (props) => {
  const { locale, className } = props;
  const cart = useCart();
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/${locale}/cart`)}
      className={cn("flex items-center rounded-full bg-bgBtn px-4 py-2", className)}
    >
      <ShoppingBag
        size={20}
        className="text-textBtn"
      />
      <span
        className="ml-2 text-sm font-medium text-textBtn"
      >
        { cart.items.length }
      </span>
    </Button>
  )
}

export { BtnCart }