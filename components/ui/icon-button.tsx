import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode,
  className?: string,
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { icon, className, ...other } = props;

  return (
    <button
      ref={ ref }
      className={
        cn(
          "rounded-full flex items-center justify-center bg-center border shadow-md p-2 hover:scale-110 transition",
          className
        )
      }
      { ...other }
    >
      {icon}
    </button>
  )
})

IconButton.displayName = "IconButton";

export { IconButton }