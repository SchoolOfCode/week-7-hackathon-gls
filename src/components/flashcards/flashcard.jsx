import "./flashcard.module.css";

// eslint-disable-next-line react/prop-types
function Flashcard({ question, answer }) {
  return (
    <button>
      <button>X</button>
      <h3>{question}</h3>
      <p>{answer}</p>
    </button>
  );
}

export default Flashcard;
