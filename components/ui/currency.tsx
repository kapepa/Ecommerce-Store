"use client"

import { FC, useLayoutEffect, useState } from "react";

interface CurrencyProps {
  values: string | number,
}

const formatter = (number: number) => new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(number)

const Currency: FC<CurrencyProps> = (props) => {
  const { values } = props;
  const [ isMounted, setIsMounted ] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  })

  if(!isMounted) return null;

  return (
    <span
      className="font-semibold"
    >
      { formatter(Number(values)) }
    </span>
  )
}

export default Currency;