import React from "react";

import * as styles from "./Projects.module.css";

import Button from "../Button/Button";
import Pizza from "../../assets/img/pizza.gif";
import Book from "../../assets/img/book.gif";

const Projects = () => {
  return (
    <div className={styles.Container} id="Projects">
      <h1>Projects</h1>
      <div className={styles.Projects}>
        <div className={styles.Card_container}>
          <article className={styles.Card_front}>
            <div className={styles.Picture}></div>
            <img src={Pizza} className={styles.Icon} alt="Frequent Fooding" />
            <h4 className={styles.Title}>Frequent Fooding</h4>
            <div className={styles.Details}>
              <ul>
                <li>JavaScript</li>
                <li>CSS | SASS</li>
                <li>Webpack</li>
                <li>Edamame API</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  A client-side recipe application that searches over 1 million
                  recipes and stores them to your favorites list. You can also
                  create a shopping list of ingredients.
                </p>
              </div>
            </div>
            <Button
              target="_blank"
              url="https://naughty-darwin-1026df.netlify.com/"
            >
              Demo
            </Button>
          </article>
        </div>
        <div className={styles.Card_container}>
          <article className={styles.Card_front}>
            <div className={styles.Picture2}></div>
            <img src={Book} className={styles.Icon} alt="WordzUp" />
            <h4 className={styles.Title2}>WordzUp</h4>
            <div className={styles.Details}>
              <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Miriam-Webster API</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back2}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  An online-dictionary application that allows you to search for
                  the definition of a word, see how it is pronounced and listen
                  to a sound clip of the word.
                </p>
              </div>
            </div>
            <Button
              target="_blank"
              url="https://trusting-northcutt-28149f.netlify.com"
            >
              Demo
            </Button>
          </article>
        </div>
        <div className={styles.Card_container}>
          <article className={styles.Card_front}>
            <div className={styles.Picture}></div>
            <img src={Pizza} className={styles.Icon} alt="Frequent Fooding" />
            <h4 className={styles.Title}>Frequent Fooding</h4>
            <div className={styles.Details}>
              <ul>
                <li>JavaScript</li>
                <li>CSS | SASS</li>
                <li>Webpack</li>
                <li>Edamame API</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  A client-side recipe application that searches over 1 million
                  recipes and stores them to your favorites list. You can also
                  create a shopping list of ingredients.
                </p>
              </div>
            </div>
            <Button url="https://naughty-darwin-1026df.netlify.com/">
              Demo
            </Button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
