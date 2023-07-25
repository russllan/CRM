import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  button?: string;
  btn?: string;
}

export const Button = ({ children, button, btn }: ButtonProps) => {
  return (
    <button className={button == "" ? style.btn : style.button}>
      <span> {children}</span>
    </button>
  );
};
