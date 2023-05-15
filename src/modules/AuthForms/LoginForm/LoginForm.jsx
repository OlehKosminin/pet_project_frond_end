import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Formik, Form } from "formik";

import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";

import styles from "./login-form.module.scss";
import { loginSchema } from "../../../shared/components/YupSchemas/authSchemas";

import { login } from "../../../shared/services/auth";

const data = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    const data = {
      email: email,
      password: password,
    };

    dispatch(login(data));
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleReset,
      }) => (
        <div className={styles.container}>
          <Form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <h2 className={styles.title}>Login</h2>
            <Box
              sx={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <TextField
                name="email"
                id="email"
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
                      onClick={handleReset}
                    >
                      {errors.email ? <ClearIcon /> : null}
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
            ></Box>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <p className={styles.questionText}>
              Don't have an account?{" "}
              <Link to="/register" className={styles.loginLink}>
                Register
              </Link>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
