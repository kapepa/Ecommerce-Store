import { BillboardInt } from "@/interface/billboard";
import queryString from 'query-string';

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboard`;

const getBillboard = async ({ locale }: { locale: string }): Promise<BillboardInt | null> => {
  try {
    const urlBillboard = queryString.stringifyUrl({ 
      url,
      query: {
        locale,
      }
    });

    const res = await fetch(urlBillboard, { method: "GET" })

    return res.json();
  } catch (error) {
    return null;
  }
}

export { getBillboard }