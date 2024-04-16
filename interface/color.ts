import { ProductInt } from "./product"

export interface ColorInt {
  id:              string
  name:            string
  value:           string
  storeId:         string
  // store:           StoreInt
  product:         ProductInt[]
  createAt:        Date | string
  updateAt:        Date | string
}