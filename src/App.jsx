import { useState } from "react";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import FlashCardContainer from "./components/flashcards/FlashcardContainer";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
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

export default App;
