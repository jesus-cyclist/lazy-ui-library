import React, { FC, ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Navigation.module.scss";

export type TNavigationProps = {
  options: Array<{
    link: string;
    icon?: ReactNode;
    text: string;
  }>;
  logo: ReactNode;
};

export const Navigation: FC<TNavigationProps> = (props) => {
  const { options = [], logo } = props;

  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);
  const buttoRef = useRef(null);

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <a href={"/"}>{logo}</a>
      </div>

      <CSSTransition
        in={isOpen}
        timeout={0}
        nodeRef={buttoRef}
        classNames={{
          enterDone: styles.hambButtonEnterDone,
        }}
      >
        <div
          className={styles.hambButton}
          onClick={(e) => setIsOpen(!isOpen)}
          ref={buttoRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={500}
        nodeRef={listRef}
        classNames={{
          enterActive: styles.listEnterActive,
          enterDone: styles.listEnterDone,
        }}
      >
        <ul className={styles.list} ref={listRef}>
          {options.map((element) => (
            <li key={element.text} className={styles.listItem}>
              <a href={element.link}>
                {element?.icon}
                {element.text}
              </a>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </nav>
  );
};
