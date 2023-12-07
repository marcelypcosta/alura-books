//Bibliteca
import styled from "styled-components";

import logo from "../assets/imgs/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 30px;
`;

function Logo() {
  return (
    <LogoContainer>
      <img className="img-logo" src={logo} alt="Logo da Alura Books" />
      <p className="txt-logo">
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
