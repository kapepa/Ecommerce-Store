import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode,
  className?: string,
}

const Container: FC<ContainerProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={cn("mx-auto max-w-7xl", className)}
    >
      {children}
    </div>
  )
}

export { Container }