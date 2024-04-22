"use client"

import { cn } from "@/lib/utils";
import { FC, useLayoutEffect, useState } from "react";

interface CurrencyProps {
  values: string | number,
  className?: string 
}

const formatter = (number: number) => new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(number)

const Currency: FC<CurrencyProps> = (props) => {
  const { values, className } = props;
  const [ isMounted, setIsMounted ] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  })

  if(!isMounted) return null;

  return (
    <span
      className={cn("font-semibol", className)}
    >
      { formatter(Number(values)) }
    </span>
  )
}

export default Currency;