import { useTranslations } from "next-intl";
import { FC } from "react";

const Footer: FC = () => {
  const t = useTranslations('Footer');

  return (
    <div
      className="border-t"
    >
      <div 
        className="mx-auto py-10"
      >
        <p
          className="text-center text-x"
        >
          &copy; { t("AllRightsReserved") } 
        </p>
      </div>
    </div>
  )
}

export { Footer }