import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("Nome e obrigatorio"),
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email e obrigatorio"),
  password: yup
    .string()
    .min(6, "No minimo 6 caracteres")
    .required("Senha e obrigatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Necessario ser igual a senha"),
  bio: yup.string().required("Bio e obrigatorio"),
  contact: yup.string().required("Contato e obrigatorio"),
  course_module: yup.string().required("Modulo e obrigatorio"),
});

export default registerSchema;
