import React from "react";
import * as styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faScroll } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/img/transparent.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.Footer}>
      <div className={styles.Links}>
        <a
          href="https://github.com/JaredAvila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.Icon} icon={faGithub} /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/jared-avila/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.Icon} icon={faLinkedin} /> LinkedIn
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={styles.Icon} icon={faScroll} /> Resume
        </a>
      </div>
      <img className={styles.Logo} src={Logo} alt="JaredAvila.com" />
      <div className={styles.Links}>
        <p className={styles.SiteName}>JaredAvila Designs |</p>
        <p>
          <FontAwesomeIcon className={styles.Copy} icon={faCopyright} /> {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
