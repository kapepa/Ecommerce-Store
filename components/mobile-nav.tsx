import { CategoryInt } from "@/interface/category";
import { FC } from "react";

interface MobileNav {
  data: CategoryInt[],
  locale: string
  className?: string,
}

const MobileNav: FC<MobileNav> = (props) => {
  const { data, className } = props;

  return (
    <nav>
      MobileNav
    </nav>
  )
}

export { MobileNav }