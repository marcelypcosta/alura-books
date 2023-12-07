import { useState } from "react";
import { livros } from "./dados";
import styled from "styled-components";

// Components
import Input from "../Input";
import Button from "../Botao";

// Estilização
const SectionBuscar = styled.section`
  width: 80%;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Titulo = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

const Subtitulo = styled.h3`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

const AreaPesquisa = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  gap: 10px;
  margin-top: 30px;
  align-items: center;
`;

const LivrosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  margin-top: 30px;
`;

function Buscador() {
  const [livrosDisponiveis, setLivrosDisponiveis] = useState([]);
  const [pesquisaLivro, setPesquisaLivro] = useState("");

  const txt = (event) => {
    setPesquisaLivro(event.target.value);
  };

  const pesquisa = () => {
    const livroPesquisado = livros.filter((livro) =>
      livro.nome.includes(pesquisaLivro)
    );

    setLivrosDisponiveis(livroPesquisado);
  };

  return (
    <SectionBuscar>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <AreaPesquisa>
        <Input
          placeholder="Pesquise aqui seu próximo livro..."
          value={pesquisaLivro}
          onChange={txt}
        />
        <Button onClick={pesquisa}>Pesquisar</Button>
      </AreaPesquisa>

      <LivrosContainer>
        {livrosDisponiveis.map((livro) => (
          <img key={livro.id} src={livro.img} alt={livro.nome} />
        ))}
      </LivrosContainer>
    </SectionBuscar>
  );
}

export default Buscador;
