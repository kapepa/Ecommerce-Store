"use client"

import { ProductInt } from "@/interface/product";
import { FC, useEffect, useState } from "react";
import { NoResults } from "./ui/no-results";
import { ProductCard, ProductCardSkeleton } from "./ui/product-card";
import { getProducts } from "@/actions/get-product";
import { useInView } from 'react-intersection-observer'
import { Loader } from "./ui/loader ";
import { Skeleton } from "./ui/skeleton";

interface ProductsListProps {
  title: string,
  locale: string,
  initialProducts: ProductInt[] | [],
}

const ProductsList: FC<ProductsListProps> = (props) => {
  const { title, initialProducts, locale } = props;
  const { ref, inView } = useInView()
  const [scrollToEnd, setScrollToEnd] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductInt[] | []>(initialProducts);

  const loadMoreProducts = async () => {
    const apiProducts = await getProducts({locale, query: { isFeatured: true, take: 8, skip: products.length }});
    setProducts([...products, ...apiProducts])
    if(apiProducts.length === 0) setScrollToEnd(true)
  }

  useEffect(() => {
    if (inView) {
      loadMoreProducts()
    }
  }, [inView])

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
        initialProducts.length 
        ? <>
            <div
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
            {
              !scrollToEnd && (
                <div
                  className="w-full flex justify-center"
                >
                  <Loader
                    ref={ref}
                    className="after:w-14 after:h-14"
                  />
                </div>
              )
            }
          </>
          
        : <NoResults/>
      }
    </div>
  )
}

const ProductsListSkeleton: FC = () => {
  const productsCell = Array(8).fill(null);

  return (
    <div
      className="space-y-4"
    >
      <div
        className="md:pl-0 pl-4"
      >
        <Skeleton
          className="h-10 w-60"
        />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-0 p-4"
      >
        { 
          productsCell.map((_, index) => (
            <ProductCardSkeleton
              key={`ProductsListSkeleton-${index}`}
            />
          )) 
        }
      </div>
    </div>
  )
}

export { ProductsList, ProductsListSkeleton }