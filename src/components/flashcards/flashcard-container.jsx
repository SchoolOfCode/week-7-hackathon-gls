import Flashcard from "./flashcard";
import styles from "./flashcard.module.css";

export default function FlashCardContainer({ flashcards }) {
  return (
    <section className={styles.container}>
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </section>
  );
}
