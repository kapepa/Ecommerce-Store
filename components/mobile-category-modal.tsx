"use client"

import { useCategoryNavModal } from "@/hooks/use-category-modal";
import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IconButton } from "./ui/icon-button";
import { X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileCategoryModal: FC = () => {
  const { open, navigation, onClose } = useCategoryNavModal()

  if (!open) return null;

  return (
    <Transition
      as={Fragment}
      show={open}
      appear
    >
      <Dialog
        open={open}
        as="div"
        className="relative z-10 lg:hidden"
        onClose={onClose}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
        />
        <div
          className="fixed inset-0 z-10 flex"
        >
          <Dialog.Panel
            className="relative flex h-full w-full max-w-xs flex-col overflow-auto bg-background py-4 pb-6 shadow-xl border-r-[1px] border"
          >
            <div
              className="flex items-center justify-between px-4"
            >
              <Link
                href="/"
                className="flex lg:ml-0 gap-x-2"
                onClick={onClose}
              >
                <p
                  className="font-bold text-xl"
                >
                  Store
                </p>
              </Link>
              <IconButton
                icon={<X size={15} />}
                onClick={onClose}
              />
            </div>
            <div
              className="p-4"
            >
              <nav
                className="mx-6 flex flex-col items-center space-y-4 lg:space-x-6 pr-2"
              >
                {
                  navigation.map((route, index) => (
                    <Link
                      key={`${route.href}-${index}`}
                      href={route.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary whitespace-nowrap",
                        route.active ? "text-foreground" : "text-neutral-500",
                      )}
                      onClick={onClose}
                    >
                      {route.label}
                    </Link>
                  ))
                }
              </nav>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}

export { MobileCategoryModal }