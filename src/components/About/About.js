import React from "react";

import * as styles from "./About.module.css";

import javaScript from "../../assets/img/javascript.png";
import nodeJS from "../../assets/img/nodejs.png";
import reactJS from "../../assets/img/react.png";

const About = () => {
  return (
    <div className={styles.About}>
      <h1 className={styles.Heading}>Front End JavaScript Developer</h1>
      <h3 className={styles.Sub}>with full-stack experience</h3>
      <div className={styles.Boxes}>
        <div className={styles.Text}>
          <h4>Motivated to produce results</h4>
          <p>
            As a tenacious self-taught programmer, I use continuous iteration to
            produce results quickly and continuously improve products.
          </p>
          <h4>An agile collaborator</h4>
          <p>
            I have contributed to open source projects, worked on engineering
            teams, and always stay attuned to the newest frameworks.
          </p>
        </div>
        <div className={styles.Tech}>
          <img src={javaScript} alt="" />
          <img src={nodeJS} alt="" />
          <img src={reactJS} alt="" />
          <img src={reactJS} alt="" />
          <img src={reactJS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
