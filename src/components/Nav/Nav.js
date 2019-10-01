import React from "react";

import * as styles from "./Nav.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/img/241x241.png";

const Nav = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Logo} src={Logo} alt="jaredavila.com" />
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ResContainer}
      >
        <FontAwesomeIcon className={styles.Scroll} icon={faScroll} />
        <p className={styles.Res}>Resume</p>
      </a>
      <a
        href="https://www.linkedin.com/in/jared-avila/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.LinkedContainer}
      >
        <FontAwesomeIcon className={styles.LinkedIn} icon={faLinkedin} />
        <p className={styles.Linked}>LinkedIn</p>
      </a>
      <a
        href="https://github.com/JaredAvila"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.GitContainer}
      >
        <FontAwesomeIcon className={styles.GitHub} icon={faGithub} />
        <p className={styles.Git}>GitHub</p>
      </a>
    </div>
  );
};

export default Nav;
