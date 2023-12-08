import React, { FC, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Angle } from "../../core/assets/icons/angle.svg";
import styles from "./Accordion.module.scss";

export type TAccordionProps = {
  isOpen: boolean;
  open: Function;
  onToggle?: Function;
  children: ReactNode;
  title: string;
};

export const Accordion: FC<TAccordionProps> = (props) => {
  const { isOpen, onToggle, children, title, open } = props;

  const contentRef = useRef(null);
  const angleRef = useRef(null);

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
