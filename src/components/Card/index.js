import styled from "styled-components";

import { Botao } from "../Botao";

const Card = styled.div`
  width: 30%;
  margin: 0px auto;
  background-color: #fff;
  padding: 32px;
  display: flex;
  gap: 30px;
  border-radius: 50px;
`;

const Titulo = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #eb9b00;
  margin-bottom: 30px;
`;

const Subtitulo = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Descricao = styled.p`
  text-align: justify;
`;

const Imagem = styled.img`
    width: 100%;
`

function CardRecomenda({ titulo, subtitulo, descricao, imagem }) {
  return (
    <Card>
      <div>
        <Titulo>{titulo}</Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <Imagem src={imagem} />
        <Botao cor="#eb9b00" width="100%" textTransform="uppercase" fontSize='14px'>Saiba Mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomenda;
