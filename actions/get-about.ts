import { LocalLanguagesEn } from "@/enum/local-languages";
import { AboutInt } from "@/interface/about";
import queryString from "query-string";

const url = `${process.env.NEXT_PUBLIC_API_URL}/about`;

const getAbout = async (query: { locale: LocalLanguagesEn }): Promise<AboutInt | null> => {
  try {
    const stringified = queryString.stringify(query);
    const req = await fetch(`${url}?${stringified}`, { method: "GET", cache: 'no-store' })

    return req.json();
  } catch {
    return null;
  }
}

export { getAbout }