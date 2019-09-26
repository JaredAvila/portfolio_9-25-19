import React from "react";

import * as styles from "./Tech.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faDatabase,
  faCloudUploadAlt
} from "@fortawesome/free-solid-svg-icons";

const Tech = () => {
  return (
    <div className={styles.Tech}>
      <div className={styles.Box}>
        <FontAwesomeIcon className={styles.Icon} icon={faDesktop} />
        <h3>Front End</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3 | SASS</li>
          <li>JavaScript</li>
          <li>React | Redux</li>
        </ul>
      </div>
      <div className={styles.Box}>
        <FontAwesomeIcon className={styles.Icon} icon={faServer} />
        <h3>Back End</h3>
        <ul>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>
      <div className={styles.Box}>
        <FontAwesomeIcon className={styles.Icon} icon={faDatabase} />
        <h3>Database</h3>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>SQLite</li>
        </ul>
      </div>
      <div className={styles.Box}>
        <FontAwesomeIcon className={styles.Icon} icon={faCloudUploadAlt} />
        <h3>Deployment</h3>
        <ul>
          <li>System Design</li>
          <li>AWS EC2</li>
          <li>Git</li>
          <li>Netlify</li>
        </ul>
      </div>
    </div>
  );
};

export default Tech;
