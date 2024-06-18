"use client"

import { FC, useTransition } from "react";
import { Modal } from "./ui/modal";
import { useOrderModal } from "@/hooks/use-order-modal";
import { usePersonalInfoModal } from "@/hooks/use-personal-info-modal";
import { useCart } from "@/hooks/use-cart";
import { Separator } from "./ui/separator";
import Currency from "./ui/currency";
import { Button } from "./ui/Button";
import { postCheckout } from "@/actions/post-checkout";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from 'query-string';
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const OrderModal: FC = () => {
  const router = useRouter();
  const params = useSearchParams();

  const open = useOrderModal(state => state.open);
  const onOrderClose = useOrderModal(state => state.onClose);
  
  // const getCart = useCart(state => state.items);

  const getInfo = usePersonalInfoModal(state => state.info);
  const openPersonalInfo = usePersonalInfoModal(state => state.onOpen);

  const [isPending, startTransition] = useTransition()
  const t = useTranslations('OrderModal');

  // const totalPrice = getCart.reduce((accum, prod) => {
  //   const sum = accum + Number(prod.price)
  //   return sum
  // },0);

  const onEditInfo = () => {
    onOrderClose();
    openPersonalInfo();
  }

  const onSend = () => {
    // startTransition(async () => {
    //   try {
    //     const extractId = getCart.map(prod => prod.id);
    //     const response = await postCheckout({ productIds: extractId, info: getInfo });

    //     const current = queryString.parse(params.toString());

    //     const query = {
    //       ...current,
    //       ...response,
    //     }
    //     const url = queryString.stringifyUrl({
    //       url: window.location.href,
    //       query,
    //     });

    //     onOrderClose();
    //     router.push("/");
    //     toast.success("Your order has been completed successfully.")
    //   } catch (error) {
    //     toast.error("Something went wrong.")
    //   }
    // })
  }

  return (
    <Modal
      open={open}
      onClose={onOrderClose}
    >
      <div
        className="flex flex-col w-full"
      >
        <div
          className="flex flex-col gap-y-4 pb-4"
        >
          <h3
            className="text-2xl font-bold text-center"
          >
            {t("PersonalInformation")}
          </h3>
          <div
            className="grid grid-cols-2 grid-rows-3 gap-4"
          >
            <div
              className="text-right"
            >
              {t("Name")} :
            </div>
            <div
              className="text-left"
            >
              {getInfo?.name}
            </div>
            <div
              className="text-right"
            >
              {t("Phone")} :
            </div>
            <div
              className="text-left"
            >
              {getInfo?.phone}
            </div>
            <div
              className="text-right"
            >
              {t("Address")} :
            </div>
            <div
              className="text-left"
            >
              {getInfo?.address}
            </div>
          </div>
          <div
            className="flex justify-center"
          >
            <Button
              disabled={isPending}
              className="py-2"
              onClick={onEditInfo}
            >
              {t("Edit")}
            </Button>
          </div>
        </div>
        <Separator/>
        <div
          className="flex flex-col py-4 items-center"
        >
          <h3
            className="text-2xl font-bold text-center pb-4"
          >
            {t("YourOrder")}
          </h3>
          <div
            className="flex flex-col gap-y-1"
          >
            <div
              className="grid grid-cols-2 grid-rows-1 gap-x-6"
            >
              <span
                className="text-right font-bold"
              >
                {t("Name")}
              </span>
              <span
                className="text-left font-bold"
              >
                {t("Price")}
              </span>
            </div>
            
            {/* { getCart.map((prod, index) => (
              <div 
                key={`${prod.id}-${index}`}
                className="grid grid-cols-2 grid-rows-1 gap-x-6"
              >
                <span
                  className="text-right"
                >
                  {prod.ruName ?? prod.uaName} :
                </span>
                <span
                  className="text-left"
                >
                  <Currency
                    values={prod.price}
                  />
                </span>
              </div>
            )) } */}

          </div>
        </div>
        <Separator/>
        <div
          className="grid grid-cols-2 grid-rows-1 gap-x-6 py-4"
        >
          <span
            className="text-right font-bold"
          >
            {"OrderTotal"}:
          </span>
          <span
            className="text-left"
          >
            {/* <Currency
              values={totalPrice.toString()}
            /> */}
          </span>
        </div>
        <Separator/>
        <div
          className="flex justify-center pt-4"
        >
          <Button
            disabled={isPending}
            className="py-2"
            onClick={onSend}
          >
            {t("Order")}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export { OrderModal }