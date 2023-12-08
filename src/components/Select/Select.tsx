import React, { FC, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Angle } from "../../core/assets/icons/angle.svg";
import styles from "./Select.module.scss";

export type TSelectProps = {
  isOpen: boolean;
  open: Function;
  options: Array<string>;
  value: string;
  onChange: Function;
  placeholder?: string;
  isDisabled?: boolean;
};

export const Select: FC<TSelectProps> = (props) => {
  const {
    isOpen = false,
    open,
    options = [],
    value,
    onChange,
    placeholder = "",
    isDisabled = false,
  } = props;

  const [selectedValue, setSelectedValue] = useState(placeholder);
  const angleRef = useRef(null);
  const listRef = useRef(null);

  const handleListItemClick = (listItem: string) => {
    if (isDisabled) {
      return;
    }
    onChange(listItem);
    setSelectedValue(listItem);
  };

  const getSelectClassName = () =>
    `${styles.select} ${isDisabled && styles.selectDisabled}`;

  return (
    <div
      className={getSelectClassName()}
      onClick={(e) => {
        if (isDisabled) {
          return;
        }
        open();
      }}
    >
      {selectedValue}
      <CSSTransition
        in={isOpen}
        timeout={500}
        nodeRef={angleRef}
        classNames={{
          enter: styles.angleEnter,
          enterActive: styles.angleEnterActive,
          enterDone: styles.angleEnterDone,
          exit: styles.angleExit,
          exitActive: styles.angleExitActive,
        }}
      >
        <div className={styles.angle} ref={angleRef}>
          <Angle />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={500}
        nodeRef={listRef}
        classNames={{
          enter: styles.selectListEnter,
          enterActive: styles.selectListEnterActive,
          enterDone: styles.selectListEnterDone,
          exit: styles.selectListExit,
          exitActive: styles.selectListExitActive,
        }}
      >
        <ul className={styles.selectList} ref={listRef}>
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
