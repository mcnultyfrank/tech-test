import React from "react";
import styles from "./WelcomePage.module.scss";
import { Link } from "@reach/router";
import footballImage from "./football.svg"
import quizImage from "./quiz.svg"
import apiImage from "./api.svg"

const WelcomePage = () => {
  return (
    <div className = {styles.container}>
      <article>
        <h2>Ajax Data Table</h2>
        <Link to = {"ajax"}>
        <button>Click me</button>
        <img src={apiImage} alt="" srcset=""/>
        </Link>
      </article>
      <article>
        <h2>Single Question Quiz</h2>
        <Link to = {"quiz"}>
        <button>Click me</button>
        <img src={quizImage} alt="" srcset=""/>
        </Link>
      </article>
      <article>
        <h2>Football Formation Fun</h2>
        <Link to = {"football"}>
        <button>Click me</button>
        <img src={footballImage} alt=""/>
        </Link>
      </article>
    
    
    </div>
  );
};

export default WelcomePage;
