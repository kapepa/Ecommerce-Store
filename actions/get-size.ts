import { SizeInt } from "@/interface/size";

const url = `${process.env.NEXT_PUBLIC_API_URL}/size`;

const getSizes = async (id: string): Promise<SizeInt[] | null> => {
  try {
    const res = await fetch(`${url}/filter/product/${id}`);

    return res.json();
  } catch (error) {
    return null
  }
}

export { getSizes }