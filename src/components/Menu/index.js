// Biblioteca
import styled from "styled-components";

const OpcoesMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

const Opcao = styled.li`
  text-transform: uppercase;
  color: #002f52;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

function Menu() {
  const options = ["Categoria", "Favoritos", "Minha Estante"];

  return (
    <OpcoesMenu className="menu">
      {options.map((option) => (
        <Opcao className="optns">
          <a href="#">{option}</a>
        </Opcao>
      ))}
    </OpcoesMenu>
  );
}

export default Menu;
