import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../requests/api";

import { DivForm } from "./styles";
import { Input } from "../../components/inputs";
import { Label } from "../../components/label";
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import { GlobalDiv } from "../../components/globalDiv";
import { DivInput } from "../../components/divInputs";
import { Error } from "../../components/error";
import userSchema from "../../validators/loginUser";

import { toast } from "react-toastify";

import logo from "../../assets/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = ({ setAuthentication }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const navigate = useNavigate();

  function userLogin(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@token", res.data.token);
        localStorage.setItem("@id", res.data.user.id);
        navigate("/home", { replace: true });
        toast.success("Usuario Logado");
        setAuthentication(true);
      })
      .catch((err) => {
        toast.error("Verifique as informacoes de login");
        console.log(err);
      });
  }

  return (
    <GlobalDiv>
      <img src={logo} alt="Logo Kenzie Hub" />
      <DivForm>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(userLogin)}>
          <Label htmlFor="email">Email</Label>
          <DivInput>
            <Input type="text" id="email" {...register("email")} />
            <Error className="error">{errors.email?.message}</Error>
          </DivInput>

          <Label htmlFor="password">Senha</Label>
          <DivInput>
            <Input type="password" id="password" {...register("password")} />
            <Error className="error">{errors.password?.message}</Error>
          </DivInput>
          <Button className="entrar">Entrar</Button>
          <p>Ainda nao possui uma conta?</p>
          <Button
            onClick={() => navigate("/signUp", { replace: true })}
            className="fazerCadastro"
          >
            Fazer Cadastro
          </Button>
        </Form>
      </DivForm>
    </GlobalDiv>
  );
};

export default Login;
