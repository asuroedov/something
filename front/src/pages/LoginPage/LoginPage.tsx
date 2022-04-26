import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

import styles from "./style.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <LoginForm className={styles.loginForm} />
    </div>
  );
};

export default LoginPage;
