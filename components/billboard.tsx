import { BillboardInt } from "@/interface/billboard";
import { FC } from "react";

interface BillboardProps {
  data?: BillboardInt | null
}

const Billboard: FC<BillboardProps> = (props) => {
  const { data } = props;

  if (!data) return null;

  return (
    <div
      className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden"
    >
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cove"
        style={{backgroundImage: `url(${data?.imageUrl})`}}
      >
        <div
          className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8"
        >
          <h1 
            className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-shadow"
          >
            { data?.label }
          </h1>
        </div>
      </div>
    </div>
  )
}

export { Billboard }