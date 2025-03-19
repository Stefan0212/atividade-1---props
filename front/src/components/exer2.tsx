import { useState } from "react";
import Ball from "./ball";
import styled from "styled-components";

const Container = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: red;
`;

const Exercisedois = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addNumber = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setNumbers((prev) => {
        const newNumbers = [...prev, num];
        return newNumbers.length > 12 ? newNumbers.slice(1) : newNumbers;
      });
    }
    setInputValue("");
  };

  const removeNumber = (index: number) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>Exercício 2</Title>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addNumber}>Adicionar Número</button>
      <div>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} onRightClick={() => removeNumber(index)} />
        ))}
      </div>
    </Container>
  );
};

export default Exercisedois;
