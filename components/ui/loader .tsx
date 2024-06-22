import { cn } from "@/lib/utils";
import { FC, ForwardedRef, forwardRef } from "react";

interface LoaderProps {
  className?: string,
}

const Loader = forwardRef((props: LoaderProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "lds-dual-ring",
        "h-20 w-20 inline-block after:h-16 after:w-16 after:box-border after:block after:rounded-full after:m-2 after:border-4  after:border-solid  after:border-spinner after:animate-spinner-circle",
        className,
      )}
    />
  )
})

Loader.displayName = "Loader"

export { Loader }