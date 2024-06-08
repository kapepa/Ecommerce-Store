import { getCategories, getCategoryById } from "@/actions/get-categories";
import { getColors } from "@/actions/get-color";
import { getProducts } from "@/actions/get-product";
import { getSizes } from "@/actions/get-size";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { NextPage } from "next";
import { Filter } from "./components/filter";
import { NoResults } from "@/components/ui/no-results";
import { ProductCard } from "@/components/ui/product-card";
import { MobileFilter } from "./components/mobile-filter";
import { getTranslations } from "next-intl/server";

export const revalidate = 0;

interface CategoryIdPageProps {
  params: { 
    locale: string
    categoryId: string 
  },
  searchParams: {
    colorId: string,
    sizeId: string,
  }
}

const CategoryIdPage: NextPage<CategoryIdPageProps> = async (props) => {
  const { params, searchParams } = props;
  const products = await getProducts({ 
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId, 
  });
  const sizes = await getSizes(params.categoryId);
  const colors = await getColors(params.categoryId);
  const category = await getCategoryById(params.categoryId);
  const t = await getTranslations('Category');
  
  return (
    <Container>
      <Billboard
        data={category?.billboard}
      />
      <div
        className="px-4 sm:px-6 lg:px-8 pb-24"
      >
        <div
          className="lg:grid lf: grid-cols-5 lg: gap-x-8"
        >
          <MobileFilter
            sizes={sizes ?? []}
            colors={colors ?? []}
          />
          <div
            className="hidden lg:block"
          >
            <Filter
              valueKey="sizeId"
              name={t("Sizes")}
              data={sizes ?? []}
            />
            <Filter
              valueKey="colorId"
              name={t("Colors")}
              data={colors ?? []}
            />
          </div>
          <div
            className="mt-6 lg:col-span-4 lg:mt-0"
          >
            { products.length === 0 && <NoResults/> }
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.id}-${index}`}
                  locale={params.locale}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CategoryIdPage;