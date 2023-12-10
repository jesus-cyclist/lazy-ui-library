import React, { FC, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Angle } from "../../core/assets/icons/angle.svg";
import styles from "./Select.module.scss";

export type TSelectProps = {
  isOpen: boolean;
  open: Function;
  options: Array<string>;
  onChange?: Function;
  placeholder?: string;
  isDisabled?: boolean;
  innerControl: boolean;
};

export const Select: FC<TSelectProps> = (props) => {
  const {
    isOpen: isOpenProp,
    open,
    options = [],
    onChange,
    placeholder = "",
    isDisabled = false,
    innerControl = true,
  } = props;

  const [selectedValue, setSelectedValue] = useState(placeholder);
  const angleRef = useRef(null);
  const listRef = useRef(null);

  const [isOpenState, setIsOpenState] = useState(false);

  const handleClickSelect = () => {
    if (isDisabled) {
      return;
    }
    if (innerControl) {
      setIsOpenState(!isOpenState);
    } else {
      open();
    }
  };

  const handleListItemClick = (listItem: string) => {
    if (isDisabled) {
      return;
    }
    setSelectedValue(listItem);
    if (innerControl) {
      setIsOpenState(!isOpenState);
      return;
    }
    onChange(listItem);
  };

  const getSelectClassName = () =>
    `${styles.select} ${isDisabled && styles.selectDisabled}`;

  const isOpen = innerControl ? isOpenState : isOpenProp;

  return (
    <div className={getSelectClassName()}>
      <div className={styles.placeholder} onClick={(e) => handleClickSelect()}>
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
      </div>

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
