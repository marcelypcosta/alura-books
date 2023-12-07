import { useState } from "react";
import { livros } from "./dados";

//Biblioteca
import styled from "styled-components";

// Components
import Input from "../Input";


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

const LivrosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  margin-top: 30px;
`;

function Buscador() {
  const [pesquisaLivros, setpesquisaLivros] = useState([]);

  return (
    <SectionBuscar>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Pesquise aqui seu próximo livro..."
        onBlur={(event) => {
          const txt = event.target.value;
          const livroPesquisado = livros.filter((livro) =>
            livro.nome.includes(txt)
          );

          setpesquisaLivros(livroPesquisado);
        }}
      />
      <LivrosContainer>
        {pesquisaLivros.map((livro) => (
          <img src={livro.img} />
        ))}
      </LivrosContainer>
    </SectionBuscar>
  );
}

export default Buscador;
