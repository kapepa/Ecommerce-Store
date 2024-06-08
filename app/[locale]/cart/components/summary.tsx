"use client"

import { Button } from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { usePersonalInfoModal } from "@/hooks/use-personal-info-modal";
import { useOrderModal } from "@/hooks/use-order-modal";
import { useTranslations } from "next-intl";

const Summary: FC = () => {
  const t = useTranslations('Cart');
  const params = useSearchParams();
  const items = useCart(state => state.items);
  const removeAll = useCart(state => state.removeAll);

  const getInfo = usePersonalInfoModal(state => state.info);
  const onOpenPersonalInfo = usePersonalInfoModal(state => state.onOpen);

  const openOrder = useOrderModal(state => state.onOpen);

  useEffect(() => {
    if (params.get("success")){
      toast.success(t("OrderCompleted"));
      removeAll();
    }

    if (params.get("canceled")){
      toast.error("SomethingWentWrong")
    }
  }, [params, removeAll]);
  
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    if(!getInfo || !getInfo.name || !getInfo.phone || !getInfo.address) return onOpenPersonalInfo();
    openOrder();
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
        disabled={!items.length}
        className="w-full mt-6"
      >
        { t("Checkout") }
      </Button>
    </div>
  )
}

export { Summary }