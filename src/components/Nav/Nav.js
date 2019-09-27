import React from "react";

import * as styles from "./Nav.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/img/241x241.png";

const Nav = () => {
  return (
    <div className={styles.Container}>
      <a href="/">
        <img className={styles.Logo} src={Logo} alt="jaredavila.com" />
      </a>

      <a href="/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={styles.Scroll} icon={faScroll} />
      </a>
      <a
        href="https://www.linkedin.com/in/jared-avila/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.LinkedIn} icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/JaredAvila"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.GitHub} icon={faGithub} />
      </a>
    </div>
  );
};

export default Nav;
