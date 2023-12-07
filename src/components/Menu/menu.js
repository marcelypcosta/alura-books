
// Biblioteca
import styled from "styled-components";

const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

const Opcoes = styled.li`
  text-transform: uppercase;
  color: #002f52;
  font-size: 18px;
  font-weight: 400;

  &:hover{
    text-decoration: underline;
  }
`;




function Menu() {
  const options = ["Categoria", "Favoritos", "Minha Estante"];

  return (
    <MenuContainer className="menu">
      {options.map((option) => (
        <Opcoes className="optns">
          <a href="#">{option}</a>
        </Opcoes>
      ))}
    </MenuContainer>
  );
}

export default Menu;
