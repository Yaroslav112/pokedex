import styled from 'styled-components';

export const Container = styled.div`
  width: 830px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    @media (max-width: 900px) {
      width: ${({ selectedPokemon }) => (selectedPokemon ? '90%' : 'auto')};
    }
    
    box-sizing: border-box;
    margin-bottom: 20px;
  }
`;

export const PokemonCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: calc(33.33% - 10px);
  cursor: pointer;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background: #008cff;
  color: white;
  border-radius: 5px;
  border: 1px solid gray;
  width: 100%;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
`

export const TypesContainer = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
  margin: 0 auto;
`

export const TypesText = styled.p`
  background-color: ${({ type }) => {
    switch (type) {
      case 'grass':
        return '#b5dca6';
      case 'poison':
        return '#9779a6';
      case 'electric':
        return '#ffde7d';
      case 'fire':
        return '#ef9491';
      case 'water':
        return '#0186e8';
      case 'flying':
        return '#d5e6f3';
      case 'bug':
        return '#34e820';
      case 'ground':
        return '#a17404';
      case 'fairy':
        return '#da0b99';
      case 'fighting':
        return '#f10808';
      //... todo for more colors if needed
      default:
        return 'transparent';
    }
  }};
  
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
`;

export const Select = styled.select`
  height: 20px;
  margin-top: 20px;
`
