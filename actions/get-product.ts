import { ProductInt } from "@/interface/product";
import queryString from 'query-string';

const url = `${process.env.NEXT_PUBLIC_API_URL}/product`;

interface QueryProductsProps {
  categoryId?:      string
  sizeId?:          string
  colorId?:         string
  isFeatured?:      boolean
}

const getProducts = async ({ locale, query }: {locale: string, query: QueryProductsProps}): Promise<ProductInt[] | []> => {
  try {
    const urlProducts = queryString.stringifyUrl({ 
      url,
      query: {
        locale,
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

const getOneProductById = async ({id, locale}: {id: string, locale: string}): Promise<ProductInt | null> => {
  try {
    const urlProduct = queryString.stringifyUrl({
      url: `${url}/${id}`, 
      query: {locale}
    });
    const res = await fetch(urlProduct, { method: "GET", cache: 'no-store' });

    return res.json();
  } catch (error) {
    return null;
  }
}

export { getProducts, getOneProductById }