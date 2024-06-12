"use client"

import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/icon-button";
import { ColorInt } from "@/interface/color";
import { SizeInt } from "@/interface/size";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import { Filter } from "./filter";
import { useTranslations } from "next-intl";

interface MobileFilterProps {
  sizes: SizeInt[],
  colors: ColorInt[],
}

const MobileFilter: FC<MobileFilterProps> = (props) => {
  const { sizes, colors } = props;
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations('Category');

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex text-background items-center gap-x-2 lg:hidden"
        onClick={onOpen}
      >
        <Plus
          size={20}
        />
        { t("Filter") }
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
            className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-auto bg-background py-4 pb-6 shadow-xl border-l-[1px] border"
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
                name={t("Sizes")}
                data={sizes ?? []}
              />
              <Filter
                valueKey="colorId"
                name={t("Colors")}
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