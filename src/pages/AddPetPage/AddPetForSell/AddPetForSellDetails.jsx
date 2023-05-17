import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import initialState from "./initialState";
import contactForm from "./addPetForSell.module.css";
import style from "../addPetPage.module.css";
import { SvgSelector } from "../cvgSelector/SvgSelector";

const AddPetForSellDetails = ({ onClick, addr }) => {
  console.log(addr);
  const borderStyle = {
    borderColor: "#f43f5e",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    onClick(addr, values);

    setSubmitting(false);
  };

  const backClick = useCallback(() => {
    onClick("toChoose");
  }, [onClick]);

  const fieldCheck = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Enter a title";
    } else if (!values.name) {
      errors.name = "Enter a name";
    } else if (!values.birthday) {
      errors.birthday = "Enter a date of birth";
    } else if (!values.breed) {
      errors.breed = "Enter a breed";
    }

    return errors;
  };

  return (
    <div className={contactForm.form}>
      <Formik
        initialValues={initialState}
        validate={fieldCheck}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <label className={contactForm.label}>Title of add</label>
            <Field
              className={contactForm.input}
              type="text"
              name="title"
              placeholder="Type name pet"
              style={errors.title && touched.title ? borderStyle : {}}
            />
            <div className={contactForm.error}>
              {errors.title && touched.title && <div>{errors.title}</div>}
            </div>

            <label className={contactForm.label}>Name pet</label>
            <Field
              className={contactForm.input}
              type="text"
              name="name"
              placeholder="Type name pet"
              style={errors.name && touched.name ? borderStyle : {}}
            />
            <div className={contactForm.error}>
              {errors.name && touched.name && <div>{errors.name}</div>}
            </div>

            <label className={contactForm.label}>Data of birth</label>
            <Field
              className={contactForm.input}
              type="text"
              name="birthday"
              placeholder="Type data of birth"
              style={errors.birthday && touched.birthday ? borderStyle : {}}
            />
            <div className={contactForm.error}>
              {errors.birthday && touched.birthday && (
                <div>{errors.birthday}</div>
              )}
            </div>

            <label className={contactForm.label}>Breed</label>
            <Field
              className={contactForm.input}
              type="text"
              name="breed"
              placeholder="Type breed"
              style={errors.breed && touched.breed ? borderStyle : {}}
            />
            <div className={contactForm.error}>
              {errors.breed && touched.breed && <div>{errors.breed}</div>}
            </div>

            <div style={{ marginTop: "36px" }} className={style.downSectionBtn}>
              <div className={style.wrapper}>
                <button
                  type="button"
                  onClick={backClick}
                  className={style.btnCancel}
                >
                  <SvgSelector id="arrowLeft" />
                  Cancel
                </button>
              </div>
              <div className={style.wrapper}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={style.btnNext}
                >
                  Next
                  <SvgSelector id="pawprint" />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForSellDetails;
