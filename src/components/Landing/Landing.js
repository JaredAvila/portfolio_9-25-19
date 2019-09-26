import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./Landing.module.css";

import Button from "../Button/Button";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <h1 className={styles.Title}>Jared Avila</h1>
      <h2 className={styles.Sub}>Software Developer</h2>
      <div className={styles.Icons}>
        <a
          href="https://github.com/JaredAvila"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Icon}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/jared-avila/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Icon}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <Button url="/">View Projects</Button>
    </div>
  );
};

export default Landing;
