import { ProductInt } from "@/interface/product";
import queryString from 'query-string';

const url = `${process.env.NEXT_PUBLIC_API_URL}/product`;

interface QueryProductsProps {
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

const getOneProductById = async (id: string): Promise<ProductInt | null> => {
  try {
    const res = await fetch(`${url}/${id}`, { cache: 'no-store' });

    return res.json();
  } catch (error) {
    return null;
  }
}

export { getProducts, getOneProductById }