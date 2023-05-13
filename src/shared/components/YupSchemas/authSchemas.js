import * as yup from "yup";

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

export const registerSchema = yup.object().shape({
  username: yup.string().required("Please enter a name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordPattern, { message: "Please create a stronger password" })
    .required("Please create a stronger password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password must match"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: yup.string().min(5).required(),
});
