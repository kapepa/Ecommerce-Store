"use client"

import { Button } from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { usePersonalInfoModal } from "@/hooks/use-personal-info-modal";
import { useOrderModal } from "@/hooks/use-order-modal";
import { useTranslations } from "next-intl";
import { ProductInt } from "@/interface/product";
import { Skeleton } from "@/components/ui/skeleton";

interface SummaryProps {
  products: ProductInt[],
  disabled: boolean,
}

const Summary: FC<SummaryProps> = (props) => {
  const { products, disabled } = props;
  const t = useTranslations('Cart');
  const getInfo = usePersonalInfoModal(state => state.info);
  const onOpenPersonalInfo = usePersonalInfoModal(state => state.onOpen);
  const { onSetOpen } = useOrderModal();

  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0)

  const onCheckout = async () => {
    if(!getInfo || !getInfo.name || !getInfo.phone || !getInfo.address) return onOpenPersonalInfo();
    onSetOpen(products);
  }

  return (
    <div
      className="mt-16 rounded-lg bg-bgBoard px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2
        className="text-lg font-medium text-textBoard"
      >
        { t("OrderSummary") }
      </h2>
      <div
        className="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <div
          className="text-base font-medium text-textBoard"
        >
          { t("OrderTotal") }
        </div>
        <Currency
          className="text-textBoard"
          values={totalPrice}
        />
      </div>
      <Button
        onClick={onCheckout}
        disabled={!products.length || disabled}
        className="w-full mt-6"
      >
        { t("Checkout") }
      </Button>
    </div>
  )
}

const SummarySkeleton: FC = () => {
  return (
    <div
    className="mt-16 rounded-lg bg-bgBoard px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <Skeleton
      className="w-[80%] h-6 bg-background mb-2"
    />
    <div
      className="flex items-center justify-between border-t border-gray-200 pt-4"
    >
      <Skeleton
        className="w-[30%] h-5 bg-background mr-2"
      />
      <Skeleton
        className="w-[30%] h-5 bg-background"
      />
    </div>
    
    <Skeleton
      className="w-full mt-6 py-3 px-4 bg-foreground flex justify-center"
    >
      <Skeleton
        className="w-[30%] h-5 bg-background"
      />
    </Skeleton>
  </div>
  )
}

export { Summary, SummarySkeleton }