import React from "react";
import styles from "./Button.module.scss";
interface ButtonValue {
  title: string;
}

const Button: React.FC<ButtonValue> = ({ title }) => {
  return (
    <div className={styles.container__btn}>
      <button className={styles.btn} type="submit">
        {title}
      </button>
    </div>
  );
};

export default Button;
