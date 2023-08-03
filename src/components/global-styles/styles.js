import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
`;

export const Title = styled.h1`
  border: 1px solid black;
  width: 400px;
  height: 60px;
  align-items: center;
  margin: 50px auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

export const PokemonListContainer = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`