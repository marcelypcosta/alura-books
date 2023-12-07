import styled from "styled-components";

export const Botao = styled.button`
  width: ${props => props.width || "auto"};
  background-color: ${(props) => props.cor || "#fff"};
  text-transform: ${props => props.textTransform || 'lowercase'};
  font-size:  ${props => props.fontSize || '16px'};
  color: #fff;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
