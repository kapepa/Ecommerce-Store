"use client"

import { FC, useLayoutEffect, useState } from "react"
import { Button } from "./ui/Button";
import { ShoppingBag } from "lucide-react";


const NavbarAction: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  useLayoutEffect(() => {
    setIsMounted(true);
  })

  if (!isMounted) return null;

  return (
    <div
      className="ml-auto flex items-center gap-x-4"
    >
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag
          size={20}
          color="white"
        />
        <span
          className="ml-2 text-sm font-medium text-white"
        >
          0
        </span>
      </Button>
    </div>
  )
}

export { NavbarAction };