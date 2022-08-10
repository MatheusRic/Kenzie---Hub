import api from "../../requests/api";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader, UserInfo, DivMain } from "./styles";

const Home = ({ setAuthentication }) => {
  const [logedUser, setLogedUser] = useState([]);
  const id = localStorage.getItem("@id");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((res) => setLogedUser(res.data))
      .catch((err) => console.log(err));
  }, [navigate, id]);

  function logOut() {
    localStorage.removeItem("@token");
    localStorage.removeItem("@id");
    setAuthentication(false);
    navigate("/", { replace: true });
  }

  console.log(logedUser);

  return (
    <>
      <HomeHeader>
        <img src={logo} alt="Logo Kenzie Hub" />
        <button onClick={() => logOut()}>Sair</button>
      </HomeHeader>
      <UserInfo>
        <h2>Ola, {logedUser.name}</h2>
        <h4>{logedUser.course_module}</h4>
      </UserInfo>
      <DivMain>
        <h2>Que pena, estamo em manutencao :(</h2>
        <p>
          Nossa aplicacao esta em desenvolvimento, em breve teremos novidades
        </p>
      </DivMain>
    </>
  );
};

export default Home;
