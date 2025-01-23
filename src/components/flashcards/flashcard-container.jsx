import Flashcard from "./flashcard";

export function FlashCardContainer({ flashcards }) {
  return (
    <section>
      <Flashcard flashcards={flashcards} />
    </section>
  );
}
