import { CategoryInt } from "@/interface/category";

const url = `${process.env.NEXT_PUBLIC_API_URL}/category`;

const getCategories = async (): Promise<CategoryInt[]> => {
  try {
    const res = await fetch(url, { method: "GET" });

    return res.json();
  } catch (error) {
    return []
  }
}

export { getCategories }