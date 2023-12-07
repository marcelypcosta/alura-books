// Biblioteca
import styled from "styled-components";

// Imagens
import perfil from "../assets/imgs/perfil.svg";
import sacola from "../assets/imgs/sacola.svg";

const Icones = styled.div`
  display: flex;
  gap: 20px;
`;

const Icone = styled.li`
  list-style: none;
`;

function Perfil() {
  const icons = [perfil, sacola];

  return (
    <Icones className="icons">
      {icons.map((icone) => (
        <Icone>
          <a href="#">
            <img src={icone} />
          </a>
        </Icone>
      ))}
    </Icones>
  );
}

export default Perfil;
