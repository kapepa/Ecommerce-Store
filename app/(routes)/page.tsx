import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-product";
import { Billboard } from "@/components/billboard";
import { ProductsList } from "@/components/products-list";
import { Container } from "@/components/ui/container";
import { NextPage } from "next";

export const revalidate = 0

const HomePage: NextPage = async () => {
  const products = await getProducts({ isFeatured: true, });
  const billboard = await getBillboard("f1c58d7d-a61c-418a-a668-b5066226c204")
  
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