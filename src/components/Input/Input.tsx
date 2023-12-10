import React, { FC, useRef, useState } from "react";
import { ReactComponent as Cross } from "../../core/assets/icons/cross.svg";
import { ReactComponent as EyeClose } from "../../core/assets/icons/eye-close.svg";
import { ReactComponent as Eye } from "../../core/assets/icons/eye.svg";
import styles from "./Input.module.scss";

export type TInputProps = {
  value: string;
  placeholder: string;
  type: "text" | "email" | "password";
  onChange: Function;
  onClear: Function;
  name: string;
  disabled: boolean;
};

export const Input: FC<TInputProps> = (props) => {
  const {
    value,
    placeholder,
    type,
    onChange,
    name,
    disabled = false,
    onClear,
  } = props;

  const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);

  const inputRef = useRef(null);
  const placeholderRef = useRef(null);
  const crossRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const getActiveClassName = (className: string, isActive: boolean) => {
    return isActive
      ? `${styles[className]} ${styles[`${className}Active`]}`
      : styles[className];
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        type={isPasswordRevealed ? "text" : type}
        onChange={(e) => onChange(e)}
        name={name}
        required
        disabled={disabled}
      ></input>

      <span
        className={getActiveClassName("placeholder", !!value)}
        onClick={handleClick}
        ref={placeholderRef}
      >
        {placeholder}
      </span>

      {type === "text" && !isPasswordRevealed && (
        <div
          className={getActiveClassName("deleteAction", !!value)}
          ref={crossRef}
          onClick={(e) => onClear()}
        >
          <Cross />
        </div>
      )}
      {(type === "password" || isPasswordRevealed) && (
        <div
          className={getActiveClassName("revealAction", !!value)}
          ref={crossRef}
          onClick={(e) => setIsPasswordRevealed(!isPasswordRevealed)}
        >
          {isPasswordRevealed ? <EyeClose /> : <Eye />}
        </div>
      )}
    </div>
  );
};
