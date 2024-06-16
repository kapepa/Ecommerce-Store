import { ProductInt } from "./product"

export interface ColorInt {
  id:              string
  url:             string
  ruName:          string
  uaName:          string
  storeId:         string
  // store:           StoreInt
  product:         ProductInt[]
  createAt:        Date | string
  updateAt:        Date | string
}