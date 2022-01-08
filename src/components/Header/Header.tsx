import React from "react";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <>
      <h1 className={`display-1 text-center ${styles.title}`}>Spacestagram</h1>
      <h1 className={`p-2 text-center ${styles.subTitle}`}>
        Brought to you by NASA's APOD API
      </h1>
    </>
  );
};

export default Header;
