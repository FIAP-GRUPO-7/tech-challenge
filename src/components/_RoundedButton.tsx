import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const RoundedButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="appearance-none rounded-full bg-azul-escuro w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
    >
      {children}
    </button>
  );
};
