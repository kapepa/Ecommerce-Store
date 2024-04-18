const url = `${process.env.NEXT_PUBLIC_API_URL}/size`;

const postCheckout = async (productsId: string[]):Promise<any> => {
  try {
    const products = await fetch(`${url}/checkout`,{ 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({productsId}) 
    });

    return products.json();
  } catch (error) {
    return error
  }
};

export { postCheckout }