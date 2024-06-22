"use client"

import { FC, ReactNode, createContext, useLayoutEffect, useState } from "react";

interface CurrencyProviderProps {
  children: ReactNode
}

interface FormatCurrencyProps {
  currency: Intl.NumberFormat,
  format: (number: number) => void;
}

const FormatCurrency = createContext<FormatCurrencyProps | undefined>(undefined);

const CurrencyProvider: FC<CurrencyProviderProps> = (props) => {
  const { children } = props;
  const [isMounted, setMounted] = useState<boolean>(false);
  const entity: FormatCurrencyProps = {
    currency: new Intl.NumberFormat("uk-UA", { style: 'currency', currency: 'UAH' }),
    format (number) {
      return this.currency.format(number);
    },
  }

  useLayoutEffect(() => {
    setMounted(true);
  })

  if (!isMounted) return null;

  return (
    <FormatCurrency.Provider
      value={entity}
    >
      {children}
    </FormatCurrency.Provider>
  )
}

export { CurrencyProvider, FormatCurrency } 