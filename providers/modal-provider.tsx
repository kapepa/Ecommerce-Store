"use client"

import { MobileCategoryModal } from "@/components/mobile-category-modal";
import { OrderModal } from "@/components/order-modal";
import { PersonalInfoModal } from "@/components/personal-info-modal";
import { PreviewModal } from "@/components/preview-modal";
import { useLayoutEffect, useState } from "react"

const ModalProvider = () => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setMounted(true);
  })

  if (!isMounted) return null;

  return (
    <>
      <OrderModal/>
      <PreviewModal/>
      <PersonalInfoModal/>
      <MobileCategoryModal/>
    </>
  )
}

export { ModalProvider }