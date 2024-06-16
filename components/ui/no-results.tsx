"use client"

import { useTranslations } from "next-intl";
import { FC } from "react";

const NoResults: FC = () => {
  const t = useTranslations('NoResults');

  return (
    <div
      className="flex items-center justify-center h-full w-full text-neutral-500"
    >
      {t("NotFound")}
    </div>
  )
}

export { NoResults }