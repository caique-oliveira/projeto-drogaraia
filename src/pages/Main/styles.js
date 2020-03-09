import styled from 'styled-components';

export const Container = styled.div`
 background: #000;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
      @media only screen and (max-width: 768px) {
        font-size: 1.7rem;
      }
  }
`;
