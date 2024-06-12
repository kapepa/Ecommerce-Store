"use client"

import { FC, useLayoutEffect, useState } from "react"
import { SwitcherThemes } from "./switcher-themes";
import { LocaleSwitch } from "./locale-switcher";
import { BtnCart } from "./ui/btn-cart";

interface NavbarActionProps {
  locale: string
}

const NavbarAction: FC<NavbarActionProps> = (props) => {
  const { locale } = props;
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, [setIsMounted])

  if (!isMounted) return null;

  return (
    <div
      className="ml-auto flex items-center gap-x-4"
    >
      <SwitcherThemes
        className="md:flex hidden"
      />
      <LocaleSwitch
        locale={locale}
      />
      <BtnCart
        locale={locale}
        className="md:flex hidden"
      />
    </div>
  )
}

export { NavbarAction };