import { ProductInt } from "@/interface/product";
import queryString from 'query-string';

const url = `${process.env.NEXT_PUBLIC_API_URL}/product`;

interface QueryProductsProps {
  storeId?:         string
  categoryId?:      string
  sizeId?:          string
  colorId?:         string
  isFeatured?:      boolean
}

const getProducts = async (query: QueryProductsProps): Promise<ProductInt[] | []> => {
  try {
    const urlProducts = queryString.stringifyUrl({ 
      url,
      query: {
        storeId: query.categoryId,
        categoryId: query.categoryId,
        sizeId: query.sizeId,
        colorId: query.colorId,
        isFeatured: query.isFeatured,
      }
    })
    const res = await fetch(urlProducts);

    return res.json();
  } catch (error) {
    return []
  }
}

export { getProducts }