import { getBillboard } from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { NextPage } from "next";

export const revalidate = 0

const HomePage: NextPage = async () => {
  const billboard = await getBillboard("f1c58d7d-a61c-418a-a668-b5066226c204")
  
  return (
    <Container>
      <div 
        className="space-y-10 pb-10"
      >
        <Billboard
          data={billboard}
        />
      </div>
    </Container>
  )
}

export default HomePage;