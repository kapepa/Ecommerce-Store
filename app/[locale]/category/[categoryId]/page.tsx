import { getCategoryById } from "@/actions/get-categories";
import { getColors } from "@/actions/get-color";
import { getProducts } from "@/actions/get-product";
import { getSizes } from "@/actions/get-size";
import { Container } from "@/components/ui/container";
import { NextPage } from "next";
import { Filter } from "./components/filter";
import { MobileFilter } from "./components/mobile-filter";
import { getTranslations } from "next-intl/server";
import { CategoryBoard } from "./components/category-board";
import { CategoryProductsList } from "./components/products-list";

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
    locale: params.locale,
    query: { 
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
    }
  });
  const sizes = await getSizes(params.categoryId);
  const colors = await getColors(params.categoryId);
  const category = await getCategoryById({
    id: params.categoryId,
    locale: params.locale,
  });
  const t = await getTranslations('Category');
  
  return (
    <Container>
      <CategoryBoard
        data={category}
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
          <CategoryProductsList
            locale={params.locale}
            initialProducts={products}
          />
        </div>
      </div>
    </Container>
  )
}

export default CategoryIdPage;