import { Header } from "./components/header/Header";
import Flashcard from "./components/flashcards/flashcard.jsx";
import Footer from "./components/footer/Footer";
import { Form } from "./components/form/Form.jsx";
import { useState } from "react";
import "./App.css";
import { FlashCardContainer } from "./components/flashcards/flashcard-container.jsx";

export default function App() {
  const [flashcards, setFlashcards] = useState([]);

  function createNewFlashcard(question, answer) {
    //create an empty object
    const newObject = { question, answer };
    //get flashcards add in myQuestion
    setFlashcards((prevFlashcards) => [...prevFlashcards, newObject]);
    //get myAnswer from flashcards
    //pass data to flashcard data component
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
