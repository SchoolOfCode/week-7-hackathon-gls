import { Header } from "./components/header/Header";
import Flashcard from "./components/flashcards/flashcard.jsx";
import "./App.css";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Flashcard />
      <Footer />
    </main>
  );
}
