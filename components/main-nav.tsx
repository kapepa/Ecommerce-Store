"use client"

import { CategoryInt } from "@/interface/category";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface MainNavProps {
  data: CategoryInt[],
}

const MainNav: FC<MainNavProps> = (props) => {
  const { data } = props;
  const pathname = usePathname();

  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      {
        routes.map((route, index) => (
          <Link
            key={`${route.href}-${index}`}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-background",
              route.active ? "text-background" : "text-neutral-500",
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