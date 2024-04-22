"use client"

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...other } = props;
  // const { theme } = useTheme();

  return (
    <button
      ref={ref}
      className={cn(
        "w-auto rounded-full border-transparent px-5 py-5 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-50 transition",
        "bg-bgBtn text-textBtn",
        className,
      )}
      { ...other }
    >
      {children}
    </button>
  )
})

Button.displayName = "Button";

export { Button }