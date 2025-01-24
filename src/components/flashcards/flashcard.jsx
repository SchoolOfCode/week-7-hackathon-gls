import { useState } from "react";
import flashCardStyles from "./flashcard.module.css";

function Flashcard({ flashcard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer(e) {
    setShowAnswer(!showAnswer);
  }

  return (
    <article
      className={`
        ${flashCardStyles.flashcard} 
        ${showAnswer ? flashCardStyles.active : ""}
      `}
      onClick={toggleAnswer}
    >
      <button className={flashCardStyles.closeButton}>X</button>
      {!showAnswer ? (
        <label>
          ❓<h1>{flashcard.question}</h1>
        </label>
      ) : (
        <label>
          👀<h1>{flashcard.answer}</h1>
        </label>
      )}
    </article>
  );
}

export default Flashcard;
