"use client"

import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/icon-button";
import { ColorInt } from "@/interface/color";
import { SizeInt } from "@/interface/size";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import { Filter } from "./filter";

interface MobileFilterProps {
  sizes: SizeInt[],
  colors: ColorInt[],
}

const MobileFilter: FC<MobileFilterProps> = (props) => {
  const { sizes, colors } = props;
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex text-white items-center gap-x-2 lg:hidden"
        onClick={onOpen}
      >
        <Plus
          size={20}
        />
        Filter
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
        />
        <div
          className="fixed inset-0 z-40 flex"
        >
          <Dialog.Panel
            className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-auto bg-white py-4 pb-6 shadow-xl"
          >
            <div
              className="flex items-center justify-end px-4"
            >
              <IconButton
                icon={<X size={15} />}
                onClick={onClose}
              />
            </div>
            <div
              className="p-4"
            >
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes ?? []}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors ?? []}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export { MobileFilter }