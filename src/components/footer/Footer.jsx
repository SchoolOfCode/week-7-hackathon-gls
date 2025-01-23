import footerStyles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <p>Built with React</p>
      <img alt="react-logo" src="react.png" width={20} />
    </footer>
  );
}
