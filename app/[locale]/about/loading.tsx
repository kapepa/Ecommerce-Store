import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

const AboutLoading: FC = () => {
  return (
    <Container>
    <div
        className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <Skeleton
        className="w-32 h-8"
      />
      <div
        className="mt-3 flex flex-col pt-6"
      >
        <Skeleton
          className="w-72 h-6"
        />
        <div
          className="flex gap-x-4 pt-4"
        >
          <Skeleton
            className="w-32 h-6"
          />
          <Skeleton
            className="w-32 h-6"
          />
        </div>
      </div>
      <div
        className="pt-6"
      >
        <Skeleton
          className="w-full h-5 mb-5"
        />
        <Skeleton
          className="w-full h-5"
        />
      </div>
    </div>
  </Container>
  )
}

export default AboutLoading;