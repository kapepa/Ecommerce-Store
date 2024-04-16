import { ProductInt } from "./product"

export interface ImageInt {
  id:              string
  url:             string
  product:         ProductInt
  createAt:        Date | string
  updateAt:        Date | string
}