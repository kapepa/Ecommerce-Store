import { ProductInt } from "@/interface/product";
import { FC } from "react";
import { NoResults } from "./ui/no-results";
import { ProductCard } from "./ui/product-card";

interface ProductsListProps {
  title: string,
  products: ProductInt[] | [],
}

const ProductsList: FC<ProductsListProps> = (props) => {
  const { title, products } = props;

  return (
    <div
      className="space-y-4"
    >
      <h3
        className="font-bold text-3xl"
      >
        {title}
      </h3>
      {
        products.length 
        ? <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            { products.map((product, index) => (
              <ProductCard
                key={`${product.id}-${index}`}
                product={product}
              />
            )) }
          </div>
        : <NoResults/>
      }
    </div>
  )
}

export { ProductsList }