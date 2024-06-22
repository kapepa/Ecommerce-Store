"use client"

import { FC } from "react";
import { Tab } from '@headlessui/react'
import { ImageInt } from "@/interface/image";
import { GalleryTab } from "./gallery-tab";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

interface GalleryProps {
  images?: ImageInt[];
}

const Gallery: FC<GalleryProps> = (props) => {
  const { images } = props

  if(!images || !images.length) return null;

  return (
    <Tab.Group
      as="div"
      className="flex flex-col-reverse"
    >
      <div
        className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
      >
        <Tab.List
          className="grid grid-cols-4 gap-6"
        >
          { images.map((image, index) => (
            <GalleryTab
              key={`${image.id}-${index}`}
              image={image}
            />
          )) }
        </Tab.List>
      </div>
      <Tab.Panels
        className="aspect-square w-full"
      >
        { images.map((image, index) => (
          <Tab.Panel
            key={`${image.id}-${index}`}
          >
            <div
              className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
            >
              <Image
                fill
                src={image.url}
                alt="image"
                className="object-cover object-center"
                priority={false}
                sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
              />
            </div>
          </Tab.Panel>
        )) }
      </Tab.Panels>
    </Tab.Group>
  )
}

const GallerySkeleton: FC = () => {
  const tabSkeletonCell = Array(2).fill(null);

  return (
    <div
      className="aspect-square w-full"
    >
      <Skeleton
        className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
      />
      <div
        className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
      >
        <div
          className="grid grid-cols-4 gap-6"
        >
          { 
            tabSkeletonCell.map((_, index) => (
              <Skeleton
                key={`TtabSkeletonCell-${index}`}
                className="w-32 h-32"
              />
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export { Gallery, GallerySkeleton }