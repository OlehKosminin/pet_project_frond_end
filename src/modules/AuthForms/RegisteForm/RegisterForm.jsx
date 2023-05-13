import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { Formik, Form } from "formik";
import { registerSchema } from "../../../shared/components/YupSchemas/authSchemas";
import { singup } from "../../../shared/services/auth";
import CustomInput from "./CustomInput/CustomInput";
import styles from "./register-form.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    dispatch(singup(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput name="username" type="text" placeholder="Name" />
            <CustomInput name="email" type="email" placeholder="Email" />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <CustomInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            <button disabled={isSubmitting} type="submit">
              Registration
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default RegisterForm;
