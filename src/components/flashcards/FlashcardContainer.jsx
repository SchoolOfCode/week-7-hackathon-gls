import Flashcard from "./Flashcard";
import styles from "./flashcard.module.css";

function FlashCardContainer({ flashcards }) {
  return (
    <section className={styles.container}>
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </section>
  );
}

export default FlashCardContainer;
