import styled from "styled-components";

export const Titulo = styled.h2`
  text-align: ${props => props.textAlign || 'start'};
  text-transform: uppercase;
  font-size: ${props => props.fontSize || '16px'};
  font-weight: bold;
  color: ${props => props.cor || '#000'};
  background-color: #fff;
  padding: 24px;
`;
