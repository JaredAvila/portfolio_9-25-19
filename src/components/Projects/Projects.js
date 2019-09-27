import React from "react";

import * as styles from "./Projects.module.css";

import Button from "../Button/Button";
import Pizza from "../../assets/img/pizza.gif";
import Book from "../../assets/img/book.gif";
import Burger from "../../assets/img/burger.gif";
import Heart from "../../assets/img/heart.gif";
import Tictactoe from "../../assets/img/tictactoe.gif";
import Music from "../../assets/img/music.gif";

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
                  create a shopping list of ingredients. Built entired with
                  Vanilla JavaScript.
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
            <div className={styles.Picture3}></div>
            <img src={Burger} className={styles.Icon} alt="Burger Time" />
            <h4 className={styles.Title3}>BurgerTime</h4>
            <div className={styles.Details}>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>Firebase</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back3}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  Burger Builder application that uses Firebase for user
                  authentication and database storage. Also utilizes the
                  LocalStorage API to keep a user in session. Built on React,
                  Redux used for state management.
                </p>
              </div>
            </div>
            <Button
              target="_blank"
              url="https://gracious-clarke-bc9281.netlify.com/"
            >
              Demo
            </Button>
          </article>
        </div>
        <div className={styles.Card_container}>
          <article className={styles.Card_front}>
            <div className={styles.Picture4}></div>
            <img src={Heart} className={styles.Icon} alt="Family Coaching" />
            <h4 className={styles.Title4}>Family Coaching</h4>
            <div className={styles.Details}>
              <ul>
                <li>React</li>
                <li>CSS3</li>
                <li>React Router</li>
                <li>WordPress</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back4}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  A web application built for a life coaching business. Client
                  wanted a modern looking site with the abiity to keep a blog
                  through WordPress. Built with React liked to a WorPress site
                  for blog section.
                </p>
              </div>
            </div>
            <Button
              target="_blank"
              url="https://gifted-volhard-f55eeb.netlify.com"
            >
              Demo
            </Button>
          </article>
        </div>
        <div className={styles.Card_container}>
          <article className={styles.Card_front}>
            <div className={styles.Picture5}></div>
            <img src={Tictactoe} className={styles.Icon} alt="TicTacToe" />
            <h4 className={styles.Title5}>Tic Tac Toe</h4>
            <div className={styles.Details}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Obeject Oriented Progamming</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back5}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  A simple Tic Tac Toe game built with JavaScript using OOP and
                  modern JavaScript/CSS DOM maniuplation.
                </p>
              </div>
            </div>
            <Button
              target="_blank"
              url="https://reverent-spence-b9638e.netlify.com/"
            >
              Demo
            </Button>
          </article>
        </div>
        <div className={styles.Card_container}>
          <article className={styles.Card_front}>
            <div className={styles.Picture6}></div>
            <img
              src={Music}
              className={styles.Icon}
              alt="Cupertino Symphonic Band"
            />
            <h4 className={styles.Title6}>Cupertino Symphonic</h4>
            <div className={styles.Details}>
              <ul>
                <li>WorpPress</li>
                <li>CSS3</li>
                <li>PHP</li>
                <li>MySQL</li>
              </ul>
            </div>
          </article>
          <article className={styles.Card_back6}>
            <div className={styles.Card_box}>
              <div className={styles.Description}>
                <p>
                  A web application built for a client for the Cupertino
                  Symphonic Band. Built with WordPress so client could manage
                  site himself. Handled DNS, hosting and deployment as well.
                </p>
              </div>
            </div>
            <Button
              target="_blank"
              url="https://www.cupertinosymphonicband.org/"
            >
              Demo
            </Button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
