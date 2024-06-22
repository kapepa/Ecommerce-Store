import { FormatCurrency } from "@/providers/currency-provider"
import { useContext } from "react"

const useCurrency = () => {
  const currency = useContext(FormatCurrency);

  return currency
}

export { useCurrency };