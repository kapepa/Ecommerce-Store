import { ProductInt } from "./product"

export interface ColorInt {
  id:              string
  url:             string
  name:            string
  storeId:         string
  // store:           StoreInt
  product:         ProductInt[]
  createAt:        Date | string
  updateAt:        Date | string
}