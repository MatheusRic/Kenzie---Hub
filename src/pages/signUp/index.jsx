import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import registerSchema from "../../validators/registerUser";
import api from "../../requests/api";

import { DivForm } from "./styles";
import { Input } from "../../components/inputs";
import { Label } from "../../components/label";
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import { GlobalDiv } from "../../components/globalDiv";
import { DivInput } from "../../components/divInputs";
import { Error } from "../../components/error";

import logo from "../../assets/logo.svg";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  function registerUser(data) {
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        toast.success("Usuario cadastrado com sucesso");
        console.log(res.data);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado");
      });
  }

  return (
    <GlobalDiv>
      <img src={logo} alt="Kenzie Hub Logo" />
      <DivForm>
        <h2>Crie sua conta</h2>
        <p>Rapido e gratis, vamos nessa</p>
        <button
          type="button"
          className="back"
          onClick={() => navigate("/", { replace: true })}
        >
          Voltar
        </button>
        <Form onSubmit={handleSubmit(registerUser)}>
          <Label htmlFor="name">Nome</Label>
          <DivInput>
            <Input type="text" id="name" {...register("name")} />
            <Error> {errors.name?.message}</Error>
          </DivInput>

          <Label htmlFor="email">Email</Label>
          <DivInput>
            <Input type="text" id="email" {...register("email")} />
            <Error>{errors.email?.message}</Error>
          </DivInput>

          <Label htmlFor="password">Senha</Label>
          <DivInput>
            <Input type="password" id="password" {...register("password")} />
            <Error>{errors.password?.message}</Error>
          </DivInput>

          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <DivInput>
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <Error>{errors.confirmPassword?.message}</Error>
          </DivInput>

          <Label htmlFor="bio">Bio</Label>
          <DivInput>
            <Input type="text" id="bio" {...register("bio")} />
            <Error>{errors.bio?.message}</Error>
          </DivInput>

          <Label htmlFor="contact">Contato</Label>
          <DivInput>
            <Input type="string" id="contact" {...register("contact")} />
            <Error>{errors.contact?.message}</Error>
          </DivInput>

          <Label htmlFor="course_module">Selecionar Modulo</Label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </DivForm>
    </GlobalDiv>
  );
};

export default SignUp;
