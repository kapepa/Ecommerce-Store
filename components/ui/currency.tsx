"use client"

import { cn } from "@/lib/utils";
import { FC, useLayoutEffect, useState } from "react";
import { Skeleton } from "./skeleton";
import { useCurrency } from "@/hooks/useCurrency";

interface CurrencyProps {
  values: string | number,
  className?: string 
}

const formatter = (number: number) => new Intl.NumberFormat("uk-UA", { style: 'currency', currency: 'UAH' }).format(number)

const Currency: FC<CurrencyProps> = (props) => {
  const { values, className } = props;
  const currency = useCurrency();
  const [ isMounted, setIsMounted ] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, [setIsMounted])

  if(!isMounted) return (
    <Skeleton
      className="h-6 w-20"
    />
  );

  return (
    <span
      className={cn("font-semibol", className)}
    >
      { currency?.format(Number(values)) ?? values }
    </span>
  )
}

export default Currency;