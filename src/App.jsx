import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Form } from "./components/form/Form";
import { useState } from "react";
import "./App.css";
import FlashCardContainer from "./components/flashcards/flashcard-container";

export default function App() {
  const [flashcards, setFlashcards] = useState([]);

  function createNewFlashcard(question, answer) {
    const newObject = { question, answer };
    setFlashcards((prevFlashcards) => [...prevFlashcards, newObject]);
  }

  return (
    <main>
      <Header />
      <Form setFlashcards={createNewFlashcard} />
      <FlashCardContainer flashcards={flashcards} />
      <Footer />
    </main>
  );
}
