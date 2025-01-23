import "./flashcard.module.css";

function Flashcard({ flashcards }) {
  return (
    <button>
      <button>X</button>
      <h3>{flashcards.question}</h3>
      <p>{flashcards.answer}</p>
    </button>
  );
}

export default Flashcard;
