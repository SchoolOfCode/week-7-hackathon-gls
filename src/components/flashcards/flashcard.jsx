import flashCardStyles from "./flashcard.module.css";
import { useState } from "react";

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
      {!showAnswer ? (
        <>
          <span>👀</span>
          <p>{flashcard.question}</p>
        </>
      ) : (
        <>
          <span>🤣</span>
          <p>{flashcard.answer}</p>
        </>
      )}
    </article>
  );
  s;
}
export default Flashcard;
