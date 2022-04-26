import React, { memo, useCallback, useState } from "react";

import contactsStore from "../../../mobx/contactsStore";

import BaseInput from "../BaseInput/BaseInput";

import { debounce } from "../../../utils/debounce";

import styles from "./style.module.scss";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchValue(value);
    const setValueIntoStorage = () => {
      contactsStore.setSearchString(value);
    };

    const debouncedSetValueIntoStorage = debounce(setValueIntoStorage, 100);
    debouncedSetValueIntoStorage();
  }, []);

  return (
    <BaseInput
      value={searchValue}
      onChange={handleChangeInput}
      className={styles.searchInput}
      placeholder={"Введите имя или телефон"}
    />
  );
};

export default memo(SearchInput);
