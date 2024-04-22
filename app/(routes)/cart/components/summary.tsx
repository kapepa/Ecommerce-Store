"use client"

import { postCheckout } from "@/actions/post-checkout";
import { Button } from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import queryString from 'query-string';


const Summary: FC = () => {
  const params = useSearchParams();
  const router = useRouter();
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

    const current = queryString.parse(params.toString());

    const query = {
      ...current,
      ...response,
    }
    const url = queryString.stringifyUrl({
      url: window.location.href,
      query,
    });

    router.push(url)
  }

  return (
    <div
      className="mt-16 rounded-lg bg-bgBoard px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2
        className="text-lg font-medium text-textBoard"
      >
        Order Summary
      </h2>
      <div
        className="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <div
          className="text-base font-medium text-textBoard"
        >
          Order total
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
        Checkout
      </Button>
    </div>
  )
}

export { Summary }