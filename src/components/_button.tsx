import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 bg-azul-escuro text-white px-4 py-2 rounded-md cursor-pointer hover:bg-azul-claro transition duration-400 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
      <IoCheckmarkSharp className="fill-white" size={20} />
    </button>
  );
};
