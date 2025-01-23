import formStyles from "./form.module.css";

export function Form() {
  return (
    <section className={formStyles.section}>
      <form>
        <label>
          Question: <input name="myQuestion" />
        </label>
        <label>
          Answer: <input name="myAnswer" />
        </label>
      </form>
      <button>Submit</button>
    </section>
  );
}
