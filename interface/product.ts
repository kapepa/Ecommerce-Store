import { CategoryInt } from "./category"
import { ColorInt } from "./color"
import { ImageInt } from "./image"
import { SizeInt } from "./size"

export interface ProductInt {
  id:              string
  ruName:          string
  uaName:          string
  meta:            string
  ruDescription:   string
  uaDescription:   string
  price:           string     
  isFeatured:      string
  // isArchived:      boolean
  // storeId:         string
  // store:           Store       
  category:        CategoryInt
  size:            SizeInt
  color:           ColorInt
  image:           ImageInt[]
  // orderItem:       OrderItem[]
  createAt:        Date | string
  updateAt:        Date | string
}