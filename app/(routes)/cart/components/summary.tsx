"use client"

import { postCheckout } from "@/actions/post-checkout";
import { Button } from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";


const Summary: FC = () => {
  const params = useSearchParams();
  const items = useCart(state => state.items);
  const removeAll = useCart(state => state.removeAll);

  useEffect(() => {
    if (params.get("success")){
      toast.success("Order completed");
      removeAll();
    }

    if (params.get("canceled")){
      toast.error("Something went wrong.")
    }
  }, [params, removeAll]);
  
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const extractId = items.map(prod => prod.id);
    const response = await postCheckout(extractId);

    window.location = response.url;
  }

  return (
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2
        className="text-lg font-medium text-gray-900"
      >
        Order Summary
      </h2>
      <div
        className="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <div
          className="text-base font-medium text-gray-900"
        >
          Order total
        </div>
        <Currency
          values={totalPrice}
        />
      </div>
      <Button
        onClick={onCheckout}
        className="w-full mt-6 text-white"
      >
        Checkout
      </Button>
    </div>
  )
}

export { Summary }