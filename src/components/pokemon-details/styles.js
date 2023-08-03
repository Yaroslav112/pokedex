import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #000000;
  margin-top: 20px;
  width: 300px;
  height: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid black;
  }

  th {
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`