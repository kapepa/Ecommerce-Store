import { UserType } from "@/hooks/use-personal-info-modal";

const url = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

type Result<OK = any, Error = never> = OK | Error;

interface PostCheckoutProps {
  productIds: string[],
  info: UserType | undefined
}

const postCheckout = async (entity: PostCheckoutProps): Promise<Result> => {
  try {
    const products = await fetch(url,{ 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entity) 
    });

    return products.json();
  } catch (error ) {
    return error
  }
};

export { postCheckout }