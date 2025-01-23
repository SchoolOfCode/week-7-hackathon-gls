import { Header } from "./components/header/Header";
import Flashcard from "./components/flashcards/flashcard.jsx";
import Footer from "./components/footer/Footer";
import { Form } from "./components/form/Form.jsx";
import { useState } from "react";
import "./App.css";

export default function App() {
  const arr = [
    { question: "Why?", answer: "Because!" },
    { question: "Hi", answer: "Hello" },
  ];

  const [jokes, setJokes] = useState(arr);

  function addJoke(joke) {
    setJokes([...jokes, joke]);
  }

  return (
    <main>
      <Header />
      <Form addJoke={addJoke} />
      {jokes.map((item, index) => (
        <Flashcard key={index} question={item.question} answer={item.answer} />
      ))}
      <Footer />
    </main>
  );
}
