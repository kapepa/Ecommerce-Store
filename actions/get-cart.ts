import { ProductInt } from "@/interface/product";
import queryString from "query-string";

const url = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

const getCart = async ({ids, locale}: {ids: string[], locale: string | string[]}): Promise<ProductInt[]> => {
  try {
    const urlCart = queryString.stringifyUrl({
      url: url,
      query: {
        ids: ids.join(","),
        locale,
      }
    })
    const res = await fetch(urlCart, { method: "GET" });
    if (res.status !== 200) return [];

    return await res.json()
  } catch {
    return []
  }
}

export { getCart }