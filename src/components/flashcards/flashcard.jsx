import flashCardStyles from "./flashcard.module.css";
import { useState } from "react";

function Flashcard({ flashcard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer(e) {
    setShowAnswer(!showAnswer);
  }

  return (
    <button className={flashCardStyles.flashcard} onClick={toggleAnswer}>
      <button className={flashCardStyles.closeButton}>X</button>
      {!showAnswer ? (
        <h3 className={flashCardStyles.question}>{flashcard.question}</h3>
      ) : (
        <p className={flashCardStyles.content}>{flashcard.answer}</p>
      )}
    </button>
  );
}

export default Flashcard;
