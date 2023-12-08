// Biblioteca
import styled from "styled-components";

// Components
import Header from "./components/Header";
import Buscador from "./components/Buscador";
import Lancamentos from "./components/Lancamentos"

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  /* width: 100%; */
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Buscador />
      <Lancamentos />
    </AppContainer>
  );
}

export default App;
