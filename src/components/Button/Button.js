import React from "react";
import * as styles from "./Button.module.css";

const Button = props => {
  return (
    <a
      className={styles.Button}
      href={props.url}
      target={props.target}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default Button;
