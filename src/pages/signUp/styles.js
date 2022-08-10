import styled from "styled-components";

export const DivForm = styled.div`
  margin: 0 auto;
  border: solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  width: 22%;
  height: 880px;
  margin-top: 1.2%;

  background-color: #212529;
  color: white;

  h2 {
    margin-left: 30%;
  }

  p {
    margin-left: 25%;
    margin-bottom: 10%;
    color: #868e96;
  }

  .back {
    position: relative;
    width: 15%;
    height: 30px;
    left: 80.5%;
    top: -14%;
    background-color: #868e96;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  select {
    background-color: #343b41;
    border-radius: 5px;
    border: none;
    width: 90%;
    height: 48px;
    margin-left: 4.8%;
    color: white;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    width: 80%;

    h2 {
      margin-left: 10%;
    }

    span {
      margin-left: 10%;
    }

    .back {
      top: -12%;
    }
  }
`;
