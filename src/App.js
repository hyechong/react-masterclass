import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const animation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${Title} {
    &:hover {
      animation: ${animation} 1s linear infinite;
    }
    transition: all 0.4s;
  }
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
