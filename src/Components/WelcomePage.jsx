import React from "react";
import styles from "./WelcomePage.module.scss";
import { Link } from "@reach/router";

const WelcomePage = () => {
  return (
    <div className = {styles.container}>
      <article>
        <h2>Ajax Data Table</h2>
        <Link to = {"ajax"}>
        <button>Click me</button>
        </Link>
      </article>
      <article>
        <h2>Quiz</h2>
        <Link to = {"quiz"}>
        <button>Click me</button>
        </Link>
      </article>
      <article>
        <h2>Football</h2>
        <Link to = {"football"}>
        <button>Click me</button>
        </Link>
      </article>
    
    
    </div>
  );
};

export default WelcomePage;
