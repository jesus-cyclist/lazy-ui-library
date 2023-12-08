import React, { ReactNode, FC, useState, useRef } from "react";
import styles from "./ConfirmableSvgButton.module.scss";
import { ReactComponent as Confirm } from "../../core/assets/icons/check.svg";
import { CSSTransition } from "react-transition-group";

export type TConfirmableSvgButtonProps = {
  withConfirm: boolean;
  icon: ReactNode;
  onClick: Function;
};

export const ConfirmableSvgButton: FC<TConfirmableSvgButtonProps> = (props) => {
  const { withConfirm, icon, onClick } = props;

  const [isClicked, setIsClicked] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const iconRef = useRef(null);
  const confirmIconRef = useRef(null);

  const handleIconClick = () => {
    if (!withConfirm) {
      onClick();
      return;
    }

    setIsClicked(!isClicked);
  };

  const handleConfirmIconClick = (
    e: React.MouseEvent,
    ref: React.MutableRefObject<any>
  ) => {
    if (isConfirm) {
      setIsConfirm(false);
      setIsClicked(false);
      return;
    }
    if (ref.current.contains(e.target)) {
      setIsConfirm(true);
      onClick();
      return;
    }
  };

  return (
    <button className={styles.button}>
      <CSSTransition
        in={isClicked}
        timeout={0}
        nodeRef={confirmIconRef}
        classNames={{
          enterDone: styles.confrimIconEnterDone,
        }}
      >
        <div
          className={isConfirm ? styles.confrimIconActive : styles.confrimIcon}
          ref={confirmIconRef}
          onClick={(e) => handleConfirmIconClick(e, confirmIconRef)}
        >
          <Confirm />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isClicked}
        timeout={0}
        nodeRef={iconRef}
        classNames={{
          enterDone: styles.iconEnterDone,
        }}
      >
        <div className={styles.icon} onClick={handleIconClick} ref={iconRef}>
          {icon}
        </div>
      </CSSTransition>
    </button>
  );
};
