"use client"

import { ImageInt } from "@/interface/image";
import { FC } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageInt
}

const GalleryTab: FC<GalleryTabProps> = (props) => {
  const { image } = props;

  return (
    <Tab
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
    >
      {({ selected }) => (
        <div>
          <span
            className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md"
          >
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
              priority={true}
              sizes="(max-width: 768px) auto, (max-width: 1200px) 50vw, auto"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  )
}

export { GalleryTab }