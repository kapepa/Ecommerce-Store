"use client"

import { FC } from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/Button";

interface BoardColorProps {
  url: string,
}

const BoardColor: FC<BoardColorProps> = (props) => {
  const { url } = props;

  if (!url) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link">
          <div
            className="p-4 relative h-10 w-10 cursor-pointer"
          >
            <Image
              fill
              src={url}
              alt="color"
              className="border object-cover rounded-full"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 h-80">
        <div
          className="p-4 relative h-full"
        >
          <Image
            fill
            src={url}
            alt="color"
            className="border object-cover rounded-sm"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { BoardColor }