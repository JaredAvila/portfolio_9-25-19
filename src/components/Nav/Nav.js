import React from "react";

import * as styles from "./Nav.module.css";

import Logo from "../../assets/img/241x241.png";

const Nav = () => {
  return (
    <div>
      <img className={styles.Logo} src={Logo} alt="jaredavila.com" />
    </div>
  );
};

export default Nav;
