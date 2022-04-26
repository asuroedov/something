import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, className, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, { [styles.btnDisabled]: props.disabled }, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
