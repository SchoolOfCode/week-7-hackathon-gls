import { useState } from "react";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import FlashCardContainer from "./components/flashcards/FlashcardContainer";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState([
    {
      question: "What do you call fake spaghetti?",
      answer: "An impasta!",
    },
    {
      question: "What do you call cheese that isn’t yours?",
      answer: "Nacho cheese! 🧀",
    },
    {
      question: "Why did the bicycle fall over?",
      answer: "Because it was two-tired!",
    },
    {
      question: "What did the ocean say to the beach?",
      answer: "Nothing, it just waved!",
    },
  ]);
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

export default App;
