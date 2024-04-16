import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <button
      ref={ref}
      className={cn(
        "w-auto rounded-full bg-black border-transparent px-5 py-5 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-50 transition",
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