import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Formik, Form } from "formik";

import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";

import styles from "./register-form.module.scss";
import { registerSchema } from "../../../shared/components/YupSchemas/authSchemas";

import { singup } from "../../../shared/services/auth";

const data = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    const data = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(singup(data));
  };

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Registration</h2>
            <Box
              sx={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <TextField
                name="name"
                type="text"
                label="Name"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                onChange={handleChange}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Box>
            <Box
              sx={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <TextField
                name="email"
                type="email"
                label="Email"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="clear"
                      edge="end"
                      size="small"
                      sx={{
                        visibility: values.email ? "visible" : "hidden",
                        color: "#F43F5E",
                      }}
                      onClick={() => {
                        data.setFieldValue("email", "");
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  ),
                }}
                onChange={handleChange}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box
              sx={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <Visibility style={{ color: blue[300] }} />
                      ) : (
                        <VisibilityOff style={{ color: blue[300] }} />
                      )}
                    </IconButton>
                  ),
                }}
                onChange={handleChange}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Box
              sx={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <TextField
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm password"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                      size="small"
                    >
                      {showConfirmPassword ? (
                        <Visibility style={{ color: blue[300] }} />
                      ) : (
                        <VisibilityOff style={{ color: blue[300] }} />
                      )}
                    </IconButton>
                  ),
                }}
                onChange={handleChange}
                value={values.confirmPassword}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            </Box>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Registration
              </button>
            </div>
            <p className={styles.questionText}>
              Already have an account?{" "}
              <Link to="/login" className={styles.loginLink}>
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
