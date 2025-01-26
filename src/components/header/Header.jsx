import headerStyles from "./header.module.css";

function Header() {
  return (
    <header className={headerStyles.header}>
      <img src="header-icon.png" alt="header-icon" width={100} />
      <h1>REACT TO THE JOKE</h1>
      <p>Create a flashcard with your favourite joke!</p>
    </header>
  );
}

export default Header;
