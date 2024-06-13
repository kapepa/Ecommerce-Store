import { FC } from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import { getCategories } from "@/actions/get-categories";
import { NavbarAction } from "./navbar-action";
import { RootNav } from "./root-nav";

interface NavbarProps {
  locale: string
}

const Navbar: FC<NavbarProps> = async (props) => {
  const { locale } = props;
  const gcategories = await getCategories();

  return (
    <div
      className="border-b"
    >
      <Container>
        <div
          className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center"
        >
          <Link
            href="/"
            className="ml-4 flex lg:ml-0 gap-x-2"
          >
            <p
              className="font-bold text-xl"
            >
              Store
            </p>
          </Link>
          <RootNav
            data={gcategories}
            locale={locale}
          />
          <NavbarAction
            locale={locale}
          />
        </div>
      </Container>
    </div>
  )
}

export { Navbar }