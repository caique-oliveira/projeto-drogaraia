import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 38em;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  height: 33em;
  @media only screen and (max-width: 768px) {
      flex-basis: 100%;
      height: 0;
      height: 30em;
      margin-bottom: 60px;
  }
  section {
    h2 {
      color: #fff;
      font-size: 2rem;
      font-weight: normal;
      margin: 2rem 0;
      text-align: center;
    }
  }

  div {
    text-justify: distribute-all-lines;
    background: #fff;
    width: 100%;
    padding: 9px;
    display: flex;
    flex-direction: column;
    #btn1{
      margin-top: 1.5em;
    }
    #btn3{
      margin-top: 2.1em;
    }

    p {
      font-size: 1.4rem;
        span{
          #more{
            display:none;
          }

        }
    }

    button {
      width: 30%;
      align-self: flex-end;
      border: 0;
      color: #fff;
      padding: 5px;
      margin-top: 15px;

    
    }
  }
`;
