import { NoResults } from "@/components/ui/no-results";
import { ProductCard, ProductCardSkeleton } from "@/components/ui/product-card";
import { ProductInt } from "@/interface/product";
import { FC } from "react";

interface CategoryProductsListProps {
  locale: string,
  initialProducts: ProductInt[] | [],
}

const CategoryProductsList: FC<CategoryProductsListProps> = (props) => {
  const { locale, initialProducts } = props;

  return (
    <div
      className="mt-6 lg:col-span-4 lg:mt-0"
    >
      { initialProducts.length === 0 && <NoResults/> }
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        { !!initialProducts.length && initialProducts.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            locale={locale}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

const CategoryProductsListSkeleton :FC = () => {
  const productCardCell = Array(3).fill(null);

  return (
    <div
      className="mt-6 lg:col-span-4 lg:mt-0"
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        { productCardCell.map((_, index) => (
          <ProductCardSkeleton
            key={`ProductCardCell-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export { CategoryProductsList, CategoryProductsListSkeleton }