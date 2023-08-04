import scss from './Button.module.scss'
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  button?: string;
  btn?: string;
}

export const Button = ({ children, button, btn }: ButtonProps) => {
  return (
    // <button className={button == "" ? style.btn : style.button}>
    <button className={scss.genericButton}>
      <span> {children}</span>
    </button>
  );
};
