import React, { FC, memo } from "react";
import cn from "classnames";

import PlusIcon from "../../icons/PlusIcon/PlusIcon";

import styles from "./style.module.scss";

interface CircleButtonProps {
  className?: string;
  onClick?: () => void;
  icon?: React.ReactElement;
}

const CircleButton: FC<CircleButtonProps> = ({ onClick, className, icon }) => {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {icon ? <>{icon}</> : <PlusIcon className={styles.plusIcon} />}
    </button>
  );
};

export default memo(CircleButton);
