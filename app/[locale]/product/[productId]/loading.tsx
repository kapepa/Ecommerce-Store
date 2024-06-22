import { GallerySkeleton } from "@/components/gallery";
import { RecommendProductsSkeleton } from "@/components/recommend-products";
import { Container } from "@/components/ui/container";
import { ProductInfoSkeleton } from "@/components/ui/product-info";
import { FC } from "react";

const ProductIdLoading: FC = () => {
  return (
    <Container>
      <div
        className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <div
          className="lg:grid lg:grid-cols-2 lg: items-start lg: gap-x-8"
        >
          <GallerySkeleton/>
          <div
            className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
          >
            <ProductInfoSkeleton/>
          </div>
        </div>
        <hr
          className="my-10"
        />
        <RecommendProductsSkeleton/>
      </div>
    </Container>
  )
}

export default ProductIdLoading;