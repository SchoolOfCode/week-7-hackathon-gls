import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <img alt="react-logo" src="react.svg" width={25} />
      <h1>Built with React</h1>
    </footer>
  );
}

export default Footer;
