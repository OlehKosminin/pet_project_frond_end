import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form } from "formik";
import { Notify } from "notiflix";

import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";

import Title from "../../../shared/components/Title/Title";
import { getLoading } from "../../../redux/auth/auth-selector";

import styles from "../../../shared/components/sass/authForm.module.scss";
import { registerSchema } from "../../../shared/components/YupSchemas/authSchemas";

import { singup } from "../../../redux/auth/auth-operations";

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
  const isLoading = useSelector(getLoading);

  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    const data = {
      name,
      email,
      password,
    };

    if (data.name.trim() === "") {
      throw Notify.failure("Name must fill out");
    }

    dispatch(singup(data));
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={onSubmit}
      validationSchema={registerSchema}
    >
      {({ values, errors, touched, handleSubmit, handleChange }) => (
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Title text="Registration" />
          <Box
            sx={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TextField
              name="name"
              type="text"
              label="Name"
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
              onChange={handleChange}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
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
              marginBottom: "32px",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TextField
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              label="Confirm password"
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
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
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
  );
};

export default RegisterForm;
