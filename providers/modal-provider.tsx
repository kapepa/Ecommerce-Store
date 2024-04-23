"use client"

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
      <PreviewModal/>
      <PersonalInfoModal/>
    </>
  )
}

export { ModalProvider }