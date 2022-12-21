import React, { FC } from "react";

export interface FlexProps<T> {
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<T>;
  children: React.ReactNode;
}

const Flex: FC<FlexProps<HTMLDivElement>> = ({
  id,
  className,
  onClick,
  children,
}) => {
  return (
    <div id={id} className={`flex ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
