import { ColorInt } from "@/interface/color";

const url = `${process.env.NEXT_PUBLIC_API_URL}/color`;

const getColors = async (id: string): Promise<ColorInt[] | null> => {
  try {
    const sizes = await fetch(`${url}/filter/product/${id}`);

    return sizes.json();
  } catch {
    return null;
  }
}

export { getColors }