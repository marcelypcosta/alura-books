import logo from "../assets/imgs/logo.svg"
import "../Logo/logo.css";

function Logo() {
  return (
    <div className="logo">
      <img className="img-logo" src={logo} alt="Logo da Alura Books" />
      <p className="txt-logo">
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
