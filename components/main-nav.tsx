"use client"

import { CategoryInt } from "@/interface/category";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface MainNavProps {
  data: CategoryInt[],
  locale: string
  className?: string,
}

const MainNav: FC<MainNavProps> = (props) => {
  const { data, locale, className } = props;
  const pathname = usePathname();
  const t = useTranslations('Nav');

  const routes = data.map(route => ({
    href: `/${locale}/category/${route.id}`,
    label: route.name,
    active: pathname === `/${locale}/category/${route.id}`,
  })).concat([
    {
      href: `/${locale}/about`,
      label: t("AboutUs"),
      active: pathname === `/${locale}/about`,
    }
  ])

  return (
    <nav
      className={cn("mx-6 flex items-center space-x-4 lg:space-x-6 pr-2", className)}
    >
      {
        routes.map((route, index) => (
          <Link
            key={`${route.href}-${index}`}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
              route.active ? "text-foreground" : "text-neutral-500",
            )}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export { MainNav };