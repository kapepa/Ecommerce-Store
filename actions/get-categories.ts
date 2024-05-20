import { CategoryInt } from "@/interface/category";

const url = `${process.env.NEXT_PUBLIC_API_URL}/category`;

const getCategories = async (): Promise<CategoryInt[]> => {
  try {
    const res = await fetch(url, { method: "GET" });

    return res.json() ?? [];
  } catch (error) {
    return []
  }
}

const getCategoryById = async (id: string): Promise<CategoryInt | null> => {
  try {
    const category = await fetch(`${url}/${id}`);

    return category.json();
  } catch (error) {
    console.error(error)
    return null;
  }
}

export { getCategories, getCategoryById }