import { FC } from "react";

const NoResults: FC = () => {
  return (
    <div
      className="flex items-center justify-center h-full w-full text-neutral-500"
    >
      No results found.
    </div>
  )
}

export { NoResults }