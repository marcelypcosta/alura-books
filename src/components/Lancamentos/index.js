import styled from "styled-components";

import { livros } from "./dados";
import imagemLivro from "../assets/imgs/Angular.svg";

// Components
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";

const SectionLancamentos = styled.div`
  margin-top: 30px;
`;

const LivrosDisponiveis = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: center;
  gap: 30px;
  padding: 64px;

  img:hover {
    cursor: pointer;
  }
`;

const LancamentosContainer = styled.div`
background-color: #ebecee;
`

function Lancamentos() {
  return (
    <SectionLancamentos>
      <Titulo cor="#eb9b00" fontSize="32px" textAlign="center">
        Últimos lançamentos
      </Titulo>
      <LancamentosContainer>
        <LivrosDisponiveis>
          {livros.map((livro) => (
            <img key={livro.id} src={livro.img} alt={livro.nome} />
          ))}
        </LivrosDisponiveis>

        <CardRecomenda
          titulo="Talvez você também se interesse por..."
          subtitulo="Angular 11 e Firebase"
          descricao="Construindo uma aplicação integrada com a plataforma do Google."
          imagem={imagemLivro}
        />
      </LancamentosContainer>
    </SectionLancamentos>
  );
}

export default Lancamentos;
