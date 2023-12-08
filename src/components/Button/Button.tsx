import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

export type TButtonProps = {
  type: "button" | "submit" | "reset";
  onClick: Function;
  isDisabled: boolean;
  children: ReactNode;
};

export const Button: FC<TButtonProps> = (props) => {
  const { type, onClick, isDisabled, children } = props;

  const getButtonClassName = () =>
    `${styles.button} ${isDisabled && styles.buttonDisabled}`;

  return (
    <button
      className={getButtonClassName()}
      onClick={(e) => onClick(e)}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
};
