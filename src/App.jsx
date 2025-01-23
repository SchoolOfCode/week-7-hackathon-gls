import { Header } from "./components/header/Header";
import Flashcard from "./components/flashcards/flashcard.jsx";
import Footer from "./components/footer/Footer";
import { Form } from "./components/form/Form.jsx";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [flashcards, setFlashcards] = useState([]);
  function createNewFlashcard(question, answer) {
    //create an empty object
    const newObject = { question, answer, open: false };
    //get flashcards add in myQuestion
    setFlashcards((prevFlashcards) => [...prevFlashcards, newObject]);
    //get myAnswer from flashcards
    //pass data to flashcard data component
  }

  return (
    <main>
      <Header />
      <Form setFlashcards={createNewFlashcard} />
      <Flashcard flashcards={flashcards} />
      <Footer />
    </main>
  );
}
