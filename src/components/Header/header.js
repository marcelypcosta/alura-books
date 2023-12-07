import "./header.css";

// Components
import Logo from "../Logo/logo";
import Menu from "../Menu/menu";
import Perfil from "../Perfil/perfil";

function Header() {
  return (
    <div className="header">
      <header className="container">
        <Logo />
        <Menu />
        <Perfil />
      </header>
    </div>
  );
}
export default Header;
