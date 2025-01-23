import { Header } from "./components/header/Header";
import Flashcard from "./components/flashcards/flashcard.jsx";
import Footer from "./components/footer/Footer";
import { Form } from "./components/form/Form.jsx";
import "./App.css";

export default function App() {
  return (
    <main>
      <Header />
      <Form />
      <Flashcard />
      <Footer />
    </main>
  );
}
