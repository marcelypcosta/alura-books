import logo from "../assets/imgs/logo.svg";
import perfil from "../assets/imgs/perfil.svg";
import sacola from "../assets/imgs/sacola.svg";

import "../components/header.css";

function Header() {
  const options = ["Categoria", "Favoritos", "Minha Estante"];
  const icons = [perfil, sacola];

  return (
    <div className="header">
      <header className="container">
        <div className="logo">
          <img className="img-logo" src={logo} alt="Logo da Alura Books" />
          <p className="txt-logo">
            <strong>Alura</strong>Books
          </p>
        </div>
        <ul className="menu">
          {options.map((option) => (
            <li className="optns">
              <a href="#">{option}</a>
            </li>
          ))}
        </ul>
        <div className="icons">
          {icons.map((icone) => (
            <a href="#"><img className="icons" src={icone} /></a>
          ))}
        </div>
      </header>
    </div>
  );
}
export default Header;
