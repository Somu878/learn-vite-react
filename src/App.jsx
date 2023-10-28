import Header from './header/header';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.$primary &&
    css`
      background: '#BF4F74';
      color: white;
    `};
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header n={count} />
      <MyButton onClick={() => setCount(count + 1)}>Test</MyButton>
    </>
  );
}

export default App;
