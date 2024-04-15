import { BillboardInt } from "@/interface/billboard";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboard`;

const getBillboard = async (id: string): Promise<BillboardInt | null> => {
  try {
    const res = await fetch(`${url}/${id}`)

    return res.json();
  } catch (error) {
    return null;
  }
}

export { getBillboard }