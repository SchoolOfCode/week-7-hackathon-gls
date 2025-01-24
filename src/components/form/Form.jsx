import { useState } from "react";
import formStyles from "./form.module.css";

export function Form({ setFlashcards }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    //prevent the page from reloading when the event is triggered (default behaviour when a form is submitted)
    e.preventDefault();
    //check that the 2 forms have input data
    if (question && answer) {
      setFlashcards(question, answer);
      setQuestion("");
      setAnswer("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        placeholder="Question"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        placeholder="Answer"
      />

      <button className={formStyles.submitButton} type="submit">
        Create Flashcard
      </button>
    </form>
  );
}
