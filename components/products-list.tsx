import { ProductInt } from "@/interface/product";
import { FC } from "react";
import { NoResults } from "./ui/no-results";
import { ProductCard } from "./ui/product-card";

interface ProductsListProps {
  title: string,
  locale: string,
  products: ProductInt[] | [],
}

const ProductsList: FC<ProductsListProps> = (props) => {
  const { title, products, locale } = props;

  return (
    <div
      className="space-y-4"
    >
      <h3
        className="font-bold text-3xl md:pl-0 pl-4"
      >
        {title}
      </h3>
      {
        products.length 
        ? <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-0 p-4"
          >
            { products.map((product, index) => (
              <ProductCard
                key={`${product.id}-${index}`}
                locale={locale}
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