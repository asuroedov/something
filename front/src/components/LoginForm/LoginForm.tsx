import React, { useCallback, useState } from "react";
import Button from "../Button/Button";

import styles from "./style.module.scss";
import DotLoader from "../DotLoader/DotLoader";

const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <div>
      <Button onClick={handleClick} className={styles.loginBtn}>
        {isLoading ? <DotLoader className={styles.loader} /> : `Войти`}
      </Button>
    </div>
  );
};

export default LoginForm;
