"use client"

import { CategoryInt } from "@/interface/category";
import { FC, useEffect, useState, } from "react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { NavigationInt } from "@/interface/navigation";
import { useCategoryNavModal } from "@/hooks/use-category-modal";

interface RootNavProps {
  data: CategoryInt[],
  locale: string
}

const RootNav: FC<RootNavProps> = (props) => {
  const { data, locale } = props;
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(true);
  const { setNavigation } = useCategoryNavModal();
  const t = useTranslations('Nav');

  const gcategoriesNav: NavigationInt[] = data.map(route => ({
    href: `/${locale}/category/${route.id}`,
    label: route.ruName ?? route.uaName,
    active: pathname === `/${locale}/category/${route.id}`,
  })).concat([
    {
      href: `/${locale}/about`,
      label: t("AboutUs"),
      active: pathname === `/${locale}/about`,
    }
  ])

  useEffect(() => {
    setNavigation(gcategoriesNav)
  },[gcategoriesNav, setNavigation])

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
      {!!gcategoriesNav && (
        <>
          {
            isDesktop
            ? (
              <MainNav
                className="md:flex hidden"
                navigation={gcategoriesNav}
              />
            )
            : (
              <MobileNav
                locale={locale}
                className="md:hidden"
              />
            )
          }
        </>
      )}
    </>
  )
}

export { RootNav }