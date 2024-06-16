import { ProductInt } from "./product"

export interface SizeInt {
  id:              string
  ruName:          string
  uaName:          string
  value:           string
  // store:           StoreInt
  product:         ProductInt[]
  createAt:        Date | string
  updateAt:        Date | string
}