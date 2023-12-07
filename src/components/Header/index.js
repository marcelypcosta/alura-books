// Biblioteca
import styled from "styled-components";

// Components
import Logo from "../Logo";
import Menu from "../Menu";
import Perfil from "../Perfil";

const HeaderContainer = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 24px 18px;
    margin: 0 auto;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
      <Perfil />
    </HeaderContainer>
  );
}
export default Header;
