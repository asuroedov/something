import React, { useCallback, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import authStore from "../../../mobx/authStore";

import InputWithTitle from "../../Inputs/InputWithTitle/InputWithTitle";
import Button from "../../Button/Button";
import DotLoader from "../../DotLoader/DotLoader";

import styles from "./style.module.scss";
import notificationsStore from "../../../mobx/notificationsStore";

const FormFields = () => {
  const [isLoading, setLoading] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.currentTarget.value);
  }, []);

  const handleChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }, []);

  const handleClick = useCallback(async () => {
    setLoading(true);

    const loginResponseStatus = await authStore.login(login, password);
    if (loginResponseStatus.isSuccess) navigate("/contacts");
    if (!loginResponseStatus.isSuccess) notificationsStore.pushNotification(loginResponseStatus.message || "");

    setLoading(false);
  }, [login, password, navigate]);

  const btnDisabled = useMemo(() => {
    return !password.length || !login.length;
  }, [password, login]);

  return (
    <div>
      <InputWithTitle onChange={handleChangeLogin} placeholder={"Логин"} value={login} className={styles.input} />
      <InputWithTitle
        onChange={handleChangePassword}
        placeholder={"Пароль"}
        value={password}
        type={"password"}
        className={styles.input}
      />
      <Button onClick={handleClick} className={styles.loginBtn} disabled={btnDisabled}>
        {isLoading ? <DotLoader className={styles.loader} /> : `Войти`}
      </Button>
    </div>
  );
};

export default observer(FormFields);
