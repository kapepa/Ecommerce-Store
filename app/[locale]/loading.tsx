import { BillboardSkeleton } from "@/components/billboard"
import { ProductsListSkeleton } from "@/components/products-list"
import { Container } from "@/components/ui/container"
import { FC } from "react"

const HomeLoading: FC = () => {
  return (
    <Container>
      <div 
        className="space-y-10 pb-10"
      >
        <BillboardSkeleton/>
        <div
          className="flex flex-col gap-y-8 sm:px-6 lg:px-8"
        >
          <ProductsListSkeleton/>
        </div>
      </div>
    </Container>
  )
}

export default HomeLoading