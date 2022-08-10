import styled from "styled-components";

export const HomeHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: solid #121214;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    width: 3%;
    height: 32px;
    border: none;
    border-radius: 5px;
    background-color: #212529;
    color: white;

    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    margin-left: -6.3%;
  }
`;

export const UserInfo = styled.div`
  border-bottom: solid #121214;
  width: 100%;
  height: 140px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DivMain = styled.main`
  color: white;
  display: flex;
  flex-direction: column;

  margin-left: 17.5%;
`;
