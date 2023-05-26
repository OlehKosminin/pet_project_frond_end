import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form } from "formik";

import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";

import Title from "../../../shared/components/Title/Title";
import { getLoading } from "../../../redux/auth/auth-selector";

import styles from "../../../shared/components/sass/authForm.module.scss";
import { loginSchema } from "../../../shared/components/YupSchemas/authSchemas";

import { login } from "../../../redux/auth/auth-operations";

const data = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const isLoading = useSelector(getLoading);

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    const data = {
      email,
      password,
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
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Title text="Login" />
          <Box
            sx={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TextField
              name="email"
              id="email"
              type="email"
              label="Email"
              size="medium"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 40,
                    border: `1px solid #54ADFF`,
                  },
                  "& input": {
                    fontSize: "16px",
                    color: "#888888",
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
                      visibility:
                        errors.email && values.email ? "visible" : "hidden",
                      color: "#F43F5E",
                    }}
                    onClick={() => {
                      handleChange({
                        target: {
                          name: "email",
                          value: "",
                        },
                      });
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
              FormHelperTextProps={{
                sx: {
                  position: "absolute",
                  bottom: -20,
                  left: 0,
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              size="medium"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 40,
                    border: `1px solid #54ADFF`,
                  },
                  "& input": {
                    fontSize: "16px",
                    color: "#888888",
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
              FormHelperTextProps={{
                sx: {
                  position: "absolute",
                  bottom: -20,
                  left: 0,
                },
              }}
            />
          </Box>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.button}
              disabled={isLoading}
            >
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
      )}
    </Formik>
  );
};

export default LoginForm;
