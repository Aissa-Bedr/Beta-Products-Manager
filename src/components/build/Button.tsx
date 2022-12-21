import React, { FC } from "react";
import { FlexProps } from "./Flex";

interface ButtonProps extends FlexProps<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ id, className, onClick, children }) => {
  return (
    <button
      id={id}
      className={`py-1 bg-blue-300 hover:bg-blue-400 dark:bg-purple-300 hover:dark:bg-purple-400 text-white rounded-full duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
