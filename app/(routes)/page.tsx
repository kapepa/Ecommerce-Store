import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-product";
import { Billboard } from "@/components/billboard";
import { ProductsList } from "@/components/products-list";
import { Container } from "@/components/ui/container";
import { NextPage } from "next";

export const revalidate = 0

const HomePage: NextPage = async () => {
  const products = await getProducts({ isFeatured: true, });
  const billboard = await getBillboard("0f063da3-c170-4d6f-9586-fa5139b51984")
  
  return (
    <Container>
      <div 
        className="space-y-10 pb-10"
      >
        <Billboard
          data={billboard}
        />
        <div
          className="flex flex-col gap-y-8 sm:px-6 lg:px-8"
        >
          <ProductsList
            title={"Featured Products"}
            products={products}
          />
        </div>
      </div>
    </Container>
  )
}

export default HomePage;