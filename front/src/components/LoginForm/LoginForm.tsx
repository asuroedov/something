import React, { FC } from "react";
import cn from "classnames";

import FormFields from "./FromFields/FromFields";
import FormTitle from "./FormTitle/FormTitle";

import styles from "./style.module.scss";

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  return (
    <form className={cn(styles.loginForm, className)} onSubmit={(event) => event.preventDefault()}>
      <FormTitle title={"Вход в приложение"} className={styles.title} />
      <FormFields />
    </form>
  );
};

export default React.memo(LoginForm);
