import flashCardStyles from "./flashcard.module.css";

function Flashcard({ flashcard }) {
  return (
    <button className={flashCardStyles.flashcard}>
      <button className={flashCardStyles.closeButton}>X</button>
      <h3 className={flashCardStyles.question}>{flashcard.question}</h3>
      <p className={flashCardStyles.content}>{flashcard.answer}</p>
    </button>
  );
}

export default Flashcard;
