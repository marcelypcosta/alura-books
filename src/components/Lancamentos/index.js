import styled from "styled-components";

import { livros } from "./dados";

// Components
import { Titulo } from "../Titulo";

const SectionLancamentos = styled.div`
  margin-top: 30px;
`;

const LancamentosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: center;
  gap: 30px;
  background-color: #ebecee;
  padding: 64px;

  img:hover {
    cursor: pointer;
  }
`;

function Lancamentos() {
  return (
    <SectionLancamentos>
      <Titulo
        cor="#eb9b00"
        fontSize="32px"
        textAlign="center"
      >
        Últimos lançamentos
      </Titulo>
      <LancamentosContainer>
        {livros.map((livro) => (
          <img key={livro.id} src={livro.img} alt={livro.nome} />
        ))}
      </LancamentosContainer>
    </SectionLancamentos>
  );
}

export default Lancamentos;
