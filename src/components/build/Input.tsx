import React, { FC } from "react";

interface InputProps {
  className?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  reference?: React.LegacyRef<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  className,
  type,
  placeholder,
  reference,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={`bg-white text-dark-2 dark:bg-dark-2 dark:text-white border-none outline-none px-2 py-1 rounded duration-300 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      ref={reference}
    />
  );
};

export default Input;
