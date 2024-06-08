import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-product";
import { Billboard } from "@/components/billboard";
import { ProductsList } from "@/components/products-list";
import { Container } from "@/components/ui/container";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

export const revalidate = 0

interface NextPageProps {
  params: { locale: string }
}

const HomePage: NextPage<NextPageProps> = async (props) => {
  const { params: { locale } } = props;
  // const products = await getProducts({ isFeatured: true });
  // const billboard = await getBillboard();
  const t = await getTranslations('Home');
  
  return (
    <Container>
      <div 
        className="space-y-10 pb-10"
      >Test
        {/* <Billboard
          data={billboard}
        />
        <div
          className="flex flex-col gap-y-8 sm:px-6 lg:px-8"
        >
          <ProductsList
            title={t("FeaturedProducts")}
            locale={locale}
            products={products}
          />
        </div> */}
      </div>
    </Container>
  )
}

export default HomePage;