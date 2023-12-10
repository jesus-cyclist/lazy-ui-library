import React, { FC, ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Angle } from "../../core/assets/icons/angle.svg";
import styles from "./Accordion.module.scss";

export type TAccordionProps = {
  isOpen: boolean;
  open: Function;
  onToggle?: Function;
  children: ReactNode;
  title: string;
  innerControl: boolean;
};

export const Accordion: FC<TAccordionProps> = (props) => {
  const {
    isOpen: isOpenProp,
    onToggle: onToggleProp,
    children,
    title,
    open,
    innerControl = true,
  } = props;

  const [isOpenState, setIsOpenState] = useState(false);

  const contentRef = useRef(null);
  const angleRef = useRef(null);

  const onToggle = () => {
    if (innerControl) {
      setIsOpenState((prevIsOpen) => !prevIsOpen);
    } else {
      onToggleProp?.();
    }
  };

  const isOpen = innerControl ? isOpenState : isOpenProp;

  return (
    <div className={styles.accordion}>
      <button onClick={(e) => onToggle()} className={styles.triggerButton}>
        <span className={styles.title}>{title}</span>
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
      </button>
      <CSSTransition
        in={isOpen}
        timeout={500}
        nodeRef={contentRef}
        classNames={{
          enter: styles.contentEnter,
          enterActive: styles.contentEnterActive,
          enterDone: styles.contentEnterDone,
          exit: styles.contentExit,
          exitActive: styles.contentExitActive,
        }}
      >
        <div className={styles.content} ref={contentRef}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
