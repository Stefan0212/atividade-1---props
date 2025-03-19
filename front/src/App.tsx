import Exercise1 from "./components/exer1";
import Exercise2 from "./components/exer2";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Exercise1 />
      <Exercise2 />
    </AppContainer>
  );
}

export default App;
