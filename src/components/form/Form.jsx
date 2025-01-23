/* eslint-disable react/prop-types */
import formStyles from "./form.module.css";

export function Form({ addJoke }) {
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
}
