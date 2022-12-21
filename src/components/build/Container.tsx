import React, { FC, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={`container m-auto py-2 ${className}`}>{children}</div>;
};

export default Container;
