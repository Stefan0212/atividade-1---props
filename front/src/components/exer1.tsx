import { useState } from "react";
import Ball from "./ball";
import styled from "styled-components";

const Container = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: blue;
`;

const Exerciseum = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = () => {
    const validCount = Math.min(count, 12);
    const newNumbers = Array.from({ length: validCount }, () => Math.floor(Math.random() * 100))
      .sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  const removeNumber = (index: number) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>Exercício 1</Title>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={generateNumbers}>Gerar Números</button>
      <div>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} onRightClick={(removeNumber)} />
        ))}
      </div>
    </Container>
  );
};

export default Exerciseum;
