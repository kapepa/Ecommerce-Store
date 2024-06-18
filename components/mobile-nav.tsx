"use client"

import { CategoryInt } from "@/interface/category";
import { Home, Search, ShoppingCart, SunMoon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { useTheme } from "next-themes";
import { ThemesView } from "@/enum/themes";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { useCategoryNavModal } from "@/hooks/use-category-modal";
import { cn } from "@/lib/utils";

interface MobileNav {
  locale: string
  className?: string,
}

const MobileNav: FC<MobileNav> = (props) => {
  const { locale, className } = props;
  const { ids } = useCart();
  const { open, onOpen, onClose } = useCategoryNavModal();
  const { theme, setTheme } = useTheme();
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    setIsTouch('ontouchstart'  in window);
  }, [(typeof window !== "undefined" && 'ontouchstart'  in window)])

  const onToggleTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
    const changerTheme = () => {
      switch (theme) {
        case ThemesView.light :
          return ThemesView.dark;
        case ThemesView.dark:
          return ThemesView.light;
        default: 
          return ThemesView.light;
      }
    }
    setTheme(changerTheme);
  }

  const onOpenCategory = () => {
    open ? onClose() : onOpen()
  }

  return (
    <nav 
      className={cn("fixed left-0 right-0 bottom-0 h-16 z-20", className)}
    >
      <ul className="flex justify-around items-center h-full gap-x-2 px-4 bg-muted">
      <li className="menu-item">
          <Button
            variant="link"
            onClick={onClose}
          >
            <Link  
              href={`/${locale}`} 
            >
              <Home
                className="h-7 w-7"
              />
            </Link >
          </Button>
        </li>
        <li className="menu-item">
          <Button
            variant="link"
            onClick={!isTouch ? onOpenCategory : undefined}
            onTouchEnd={isTouch ? onOpenCategory : undefined}
          >
            <Search 
              className="h-7 w-7"
            />
          </Button>
        </li>
        <li className="menu-item">
          <Button
            variant="link"
          >
            <Link 
              href={`/${locale}/cart`}
              className="relative"
            >
              <ShoppingCart
                className="h-7 w-7"
              />
              <span
                className="absolute left-[100%] -top-1 flex justify-center items-center bg-red-500 rounded-full h-5 w-5 text-sm transform -translate-x-2"
              >
                {ids.length}
              </span>
            </Link>
          </Button>
        </li>
        <li className="menu-item">
          <Button
            variant="link"
            onClick={!isTouch ? onToggleTheme : undefined}
            onTouchEnd={isTouch ? onToggleTheme : undefined}
          >
            <SunMoon 
              className="h-7 w-7"
            />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export { MobileNav }