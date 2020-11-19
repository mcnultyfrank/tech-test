import React, {useState} from "react";
import styles from "./Quiz.module.scss";

const Quiz = () => {
  const [input, setInput] = useState("");
  const answer = "quito";

  console.log(input);

  if (input.toLocaleLowerCase() === answer){
    alert("Well done you win!")
  }
  
  return (
    <div className = {styles.quizContainer}>
      <h1>What is the capital of Ecuador?</h1>
      <form>
        <input type="text" placeholder="Type your answer..." onInput = {e => setInput(e.target.value)}/>
      </form>
    </div>
  );
};

export default Quiz;
