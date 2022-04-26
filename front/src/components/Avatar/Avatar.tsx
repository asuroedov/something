import React, { FC, memo } from "react";
import defaultAvatar from "../../assets/defaultAvatar.png";

import styles from "./style.module.scss";

interface AvatarProps {
  imgSrc?: string;
}

const Avatar: FC<AvatarProps> = ({ imgSrc }) => {
  return <img src={imgSrc || defaultAvatar} className={styles.img} />;
};

export default memo(Avatar);
