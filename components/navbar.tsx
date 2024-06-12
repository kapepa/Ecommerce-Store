import { FC } from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { getCategories } from "@/actions/get-categories";
import { NavbarAction } from "./navbar-action";
import { MobileNav } from "./mobile-nav";

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
          { !!gcategories && (
            <MainNav
              data={gcategories}
              locale={locale}
              className="md:flex hidden"
            />
          )}
          {
            !!gcategories && (
              <MobileNav
                data={gcategories}
                locale={locale}
              // className="sm:hidden flex"
            />
            )
          }
          <NavbarAction
            locale={locale}
          />
        </div>
      </Container>
    </div>
  )
}

export { Navbar }