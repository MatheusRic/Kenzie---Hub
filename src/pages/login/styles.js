import styled from "styled-components";

export const DivForm = styled.div`
  border: solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  width: 22%;
  height: 502px;
  margin-top: 6%;

  background-color: #212529;
  color: white;

  h2 {
    margin-left: 40%;
    margin-top: 16%;
  }

  .fazerCadastro {
    margin-top: 2%;
    background-color: #868e96;
  }

  p {
    margin-left: 25%;
    color: #868e96;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;
