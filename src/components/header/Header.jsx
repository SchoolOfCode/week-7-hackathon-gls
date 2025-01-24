import headerStyles from "./header.module.css";

export function Header() {
  return (
    <header className={headerStyles.header}>
      <img src="header-icon.png" alt="header-icon" width={100} />
      <h1>GUESS THE JOKE</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
        aspernatur architecto facilis recusandae corporis amet nobis tempora
        natus, provident repellendus veniam quis harum sit. Odio exercitationem
        ad nesciunt molestiae accusamus?
      </p>
    </header>
  );
}
