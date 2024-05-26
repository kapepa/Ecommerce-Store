import { getOneProductById, getProducts } from "@/actions/get-product";
import { Gallery } from "@/components/gallery";
import { ProductsList } from "@/components/products-list";
import { Container } from "@/components/ui/container";
import { ProductInfo } from "@/components/ui/product-info";
import { NextPage, Metadata } from "next";

interface ProductIdPageProps {
  params: { 
    productId: string
  }
}

export async function generateMetadata({ params }: ProductIdPageProps): Promise<Metadata> {
  const product = await getOneProductById(params.productId);

  return {
    title: product?.name,
    description: product?.meta,
  };
}

const ProductIdPage: NextPage<ProductIdPageProps> = async (props) => {
  const { params } = props;
  const product = await getOneProductById(params.productId);
  const suggestedProducts = await getProducts({ categoryId: product?.category.id });

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
        <ProductsList
          title="Related Items"
          products={suggestedProducts}
        />
      </div>
    </Container>
  )
}

export default ProductIdPage;