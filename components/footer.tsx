import { FC } from "react";

const Footer: FC = () => {
  return (
    <div
      className="bg-white border-t"
    >
      <div 
        className="mx-auto py-10"
      >
        <p
          className="text-center text-xs text-black"
        >
          &copy; 2023 StoreName, Inc. All right reserved.
        </p>
      </div>
    </div>
  )
}

export { Footer }