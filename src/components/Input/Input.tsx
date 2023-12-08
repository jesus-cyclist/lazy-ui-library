import React, { FC, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
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
      <CSSTransition
        in={!!value}
        timeout={500}
        nodeRef={placeholderRef}
        classNames={{
          enter: styles.placeholderEnter,
          enterActive: styles.placeholderEnterActive,
          enterDone: styles.placeholderEnterDone,
        }}
      >
        <span
          className={styles.placeholder}
          onClick={handleClick}
          ref={placeholderRef}
        >
          {placeholder}
        </span>
      </CSSTransition>
      {type === "text" && !isPasswordRevealed && (
        <CSSTransition
          in={!!value}
          timeout={500}
          nodeRef={crossRef}
          classNames={{
            enter: styles.deleteActionEnter,
            enterActive: styles.deleteActionEnterActive,
            enterDone: styles.deleteActionEnterDone,
          }}
        >
          <div
            className={styles.deleteAction}
            ref={crossRef}
            onClick={(e) => onClear()}
          >
            <Cross />
          </div>
        </CSSTransition>
      )}
      {(type === "password" || isPasswordRevealed) && (
        <CSSTransition
          in={!!value}
          timeout={500}
          nodeRef={crossRef}
          classNames={{
            enter: styles.revealActionEnter,
            enterActive: styles.revealActionEnterActive,
            enterDone: styles.revealActionEnterDone,
          }}
        >
          <div
            className={styles.revealAction}
            ref={crossRef}
            onClick={(e) => setIsPasswordRevealed(!isPasswordRevealed)}
          >
            {isPasswordRevealed ? <EyeClose /> : <Eye />}
          </div>
        </CSSTransition>
      )}
    </div>
  );
};
