import { CategoryInt } from "@/interface/category";
import queryString from 'query-string';

const url = `${process.env.NEXT_PUBLIC_API_URL}/category`;

const getCategories = async ({locale}: {locale: string}): Promise<CategoryInt[]> => {
  try {
    const urlCategories = queryString.stringifyUrl({ 
      url,
      query: {
        locale,
      }
    });

    const res = await fetch(urlCategories, { method: "GET" });
    if (res.status !== 200) return [];

    return res.json();
  } catch (error) {
    return []
  }
}

const getCategoryById = async ({ id, locale }: {id: string, locale: string}): Promise<CategoryInt | null> => {
  try {
    const urlCategoriy = queryString.stringifyUrl({ 
      url: `${url}/${id}`,
      query: {
        locale,
      }
    });
    const category = await fetch(urlCategoriy, { method: "GET" });

    return category.json();
  } catch (error) {
    return null;
  }
}

export { getCategories, getCategoryById }