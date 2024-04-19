const url = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

const postCheckout = async (productIds: string[]):Promise<any> => {
  try {
    const products = await fetch(url,{ 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({productIds}) 
    });

    return products.json();
  } catch (error) {
    return error
  }
};

export { postCheckout }