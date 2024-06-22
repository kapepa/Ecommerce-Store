"use client"

import { NavigationInt } from "@/interface/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Skeleton } from "./ui/skeleton";

interface MainNavProps {
  className?: string,
  navigation: NavigationInt[]
}

const MainNav: FC<MainNavProps> = (props) => {
  const { navigation, className } = props;

  return (
    <nav
      className={cn("mx-6 flex items-center space-x-4 lg:space-x-6 pr-2", className)}
    >
      {
        navigation.map((route, index) => (
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

const MainNavSkeleton: FC = () => {
  const cells = Array(4).fill(null);

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6 pr-2"
    >
      {
        cells.map((_, index) => (
          <Skeleton
            key={`MainNavSkeleton-${index}`}
            className="h-6 w-14"
          />
        ))
      }
    </nav>
  )
}

export { MainNav, MainNavSkeleton };