import { FC } from "react";

const Footer: FC = () => {
  return (
    <div
      className="border-t"
    >
      <div 
        className="mx-auto py-10"
      >
        <p
          className="text-center text-x"
        >
          &copy; 2023 StoreName, Inc. All right reserved.
        </p>
      </div>
    </div>
  )
}

export { Footer }