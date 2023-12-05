import React, { FC, ReactNode, createRef, useEffect, useState } from "react";
import styles from "./Select.module.scss";
import { ReactComponent as Angle } from "../../core/assets/icons/angle.svg";
import { CSSTransition } from "react-transition-group";

export type TSelectProps = {
  options: Array<string>;
  value: string;
  onChange: Function;
  placeholder?: string;
  isDisabled?: boolean;
};

export const Select: FC<TSelectProps> = (props) => {
  const {
    options,
    value,
    onChange,
    placeholder = "",
    isDisabled = false,
  } = props;

  const [selectedValue, setSelectedValue] = useState(placeholder);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleListItemClick = (listItem: string) => {
    if (isDisabled) {
      return;
    }
    onChange(listItem);
    setSelectedValue(listItem);
  };

  const getSelectClassName = () =>
    isDisabled ? `${styles.select} ${styles.selectDisabled}` : styles.select;

  return (
    <div
      className={getSelectClassName()}
      onClick={(e) => {
        if (isDisabled) {
          return;
        }
        setIsSelectOpen(!isSelectOpen);
      }}
    >
      {selectedValue}
      <CSSTransition
        in={isSelectOpen}
        timeout={500}
        classNames={{
          enter: styles.angleEnter,
          enterActive: styles.angleEnterActive,
          enterDone: styles.angleEnterDone,
          exit: styles.angleExit,
          exitActive: styles.angleExitActive,
        }}
      >
        <div className={styles.angle}>
          <Angle />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSelectOpen}
        timeout={500}
        classNames={{
          enter: styles.selectListEnter,
          enterActive: styles.selectListEnterActive,
          enterDone: styles.selectListEnterDone,
          exit: styles.selectListExit,
          exitActive: styles.selectListExitActive,
        }}
      >
        <ul className={styles.selectList}>
          {options.map((li) => (
            <li key={li} className={styles.selectOption}>
              <span onClick={(e) => handleListItemClick(li)}>{li}</span>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};
