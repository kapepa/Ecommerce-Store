import { getOneProductById, getProducts } from "@/actions/get-product";
import { Gallery, } from "@/components/gallery";
import { RecommendProducts } from "@/components/recommend-products";
import { Container } from "@/components/ui/container";
import { ProductInfo } from "@/components/ui/product-info";
import { NextPage, Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface ProductIdPageProps {
  params: { 
    locale: string
    productId: string,
  }
}

export async function generateMetadata({ params: { locale, productId} }: ProductIdPageProps): Promise<Metadata> {
  const product = await getOneProductById({ locale,  id: productId });

  return {
    title: product?.ruName ?? product?.uaName,
    description: product?.meta,
  };
}

const ProductIdPage: NextPage<ProductIdPageProps> = async (props) => {
  const { params: { locale, productId } } = props;
  const product = await getOneProductById({ locale, id: productId });
  const suggestedProducts = await getProducts({ locale, query: { categoryId: product?.category.id, isFeatured: true, take: 4 } });
  const t = await getTranslations("Product");

  return (
    <Container>
      <div
        className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <div
          className="lg:grid lg:grid-cols-2 lg: items-start lg: gap-x-8"
        >
          <Gallery
            images={product?.image}
          />
          <div
            className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
          >
            <ProductInfo
              product={product}
            />
          </div>
        </div>
        <hr
          className="my-10"
        />
        <RecommendProducts
          title={t("RelatedItems")}
          locale={locale}
          products={suggestedProducts}
        />
      </div>
    </Container>
  )
}

export default ProductIdPage;