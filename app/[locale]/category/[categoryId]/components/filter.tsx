"use client"

import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/skeleton";
import { ColorInt } from "@/interface/color";
import { SizeInt } from "@/interface/size";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from 'query-string';

import { FC } from "react";

interface FilterProps {
  data: (SizeInt | ColorInt) [],
  name: string,
  valueKey: string,
}

const Filter: FC<FilterProps> = (props) => {
  const { data, name, valueKey } = props;
  const router = useRouter();
  const params = useSearchParams();
  const getSelectedParam = params.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(params.toString());

    const query = {
      ...current,
      [valueKey]: id
    }

    if(current[valueKey] === id) query[valueKey] = null;

    const url = queryString.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url)
  }

  return (
    <div
      className="mb-8"
    >
      <h3
        className="text-lg font-semibold"
      >
        {name}
      </h3>
      <hr
        className="my-4"
      />
      <div
        className="flex flex-wrap gap-2"
      >
        {data.map((val, index) => (
          <div
            key={`${val.id}-${index}`}
            className="flex items-center"
          >
            <Button
              className={cn(
                "rounded-md text-sm p-2 text-foreground bg-background border border-gray-300 hover:text-gray-700",
                getSelectedParam === val.id && "bg-foreground text-background hover:text-accent-foreground hover:bg-accent"
              )}
              onClick={onClick.bind(null, val.id)}
            >
              {val.ruName ?? val.uaName}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

const FilterSkeleton: FC = () => {
  const skeletonBtn = Array(4).fill(null)

  return (
    <div
      className="mb-8"
    >
      <Skeleton
        className="h-6 w-[50%]"
      />
      <hr
        className="my-4"
      />
      <div
        className="flex flex-wrap gap-2"
      >
        {skeletonBtn.map((_, index) => (
          <Skeleton
            key={`SkeletonBtn-${index}`}
            className="rounded-md p-2 h-8 w-14"
          />
        ))}
      </div>
    </div>
  )
}

export { Filter, FilterSkeleton }