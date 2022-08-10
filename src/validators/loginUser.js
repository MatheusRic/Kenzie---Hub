import * as yup from "yup";

const userSchema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email e obrigatorio"),
  password: yup.string().required("Senha e obrigatorio"),
});

export default userSchema;
