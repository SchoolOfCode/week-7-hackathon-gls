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
        onChange={function (e) {
          setQuestion(e.target.value);
        }}
        placeholder="Question"
      />
      <input
        type="text"
        value={answer}
        onChange={function (e) {
          setAnswer(e.target.value);
        }}
        placeholder="Answer"
      />
      <button type="submit">Create Flashcard</button>
    </form>
  );
}
/*createNewFlashcard (question, answer)
  }
  return (
    <section className={formStyles.section}>
      <form onSubmit={handleSubmit}>
        <label>
          Question: <input name="myQuestion" />
        </label>
        <label>
          Answer: <input name="myAnswer" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

/*
1 Set the state of questions
2 Set the state of answers
Their purpose is to hold the input

3 Once you press Submit, the input will'be passed to the state (QA) and placeholders
*/

/*export function Form({ addJoke }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newJoke = {
      question: event.target.elements.myQuestion.value,
      answer: event.target.elements.myAnswer.value,
    };
    addJoke(newJoke);
  }

  return (
    <section className={formStyles.section}>
      <form onSubmit={handleSubmit}>
        <label>
          Question: <input name="myQuestion" />
        </label>
        <label>
          Answer: <input name="myAnswer" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}*/
