import formStyles from "./form.module.css";

export function Form() {
  return (
    <section className={formStyles.section}>
      <form>
        <label>
          Question: <input name="myInput" />
        </label>
        <label>
          Answer: <input name="myInput" />
        </label>
      </form>
      <button>Submit</button>
    </section>
  );
}
