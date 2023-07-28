
import scss from './Button.module.scss'
import React from "react";


interface ButtonProps {
  children: React.ReactNode;

}

export const Button = ({ children }: ButtonProps) => {
  
  return (
    <button className={scss.genericButton} >
      <span> {children}</span>
    </button>
  );
};
