import { Container } from "@/components/ui/container";
import { FC } from "react";
import { CategoryBoardSkeleton } from "./components/category-board";
import { FilterSkeleton } from "./components/filter";
import { CategoryProductsListSkeleton } from "./components/products-list";

const CategoryLoading: FC = () => {
  return (
    <Container>
      <CategoryBoardSkeleton/>
      <div
        className="px-4 sm:px-6 lg:px-8 pb-24"
      >
        <div
          className="lg:grid lf: grid-cols-5 lg: gap-x-8"
        >
          <div
            className="hidden lg:block"
          >
            <FilterSkeleton/>
            <FilterSkeleton/>
          </div>
          <CategoryProductsListSkeleton/>
        </div>
      </div>
    </Container>
  )
}

export default CategoryLoading;