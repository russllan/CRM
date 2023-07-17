
import './Button.module.scss'
import React from "react";

interface ButtonProps {
  children: React.ReactNode;

}

export const Button = ({ children }: ButtonProps) => {
  
  return (
    <button  >
      <span> {children}</span>
    </button>
  );
};
