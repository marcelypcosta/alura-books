//Biblioteca
import styled from "styled-components";

// Components
import Input from "../Input";

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

function Buscador() {
  return (
    <SectionBuscar>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input placeholder="Pesquise aqui seu próximo livro..." />
    </SectionBuscar>
  );
}

export default Buscador;
