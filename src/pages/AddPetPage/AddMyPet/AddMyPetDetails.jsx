import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import initialState from "./initialState";
import contactForm from "./addMyPet.module.css";
import style from "../addPetPage.module.css";
import { SvgSelector } from "../cvgSelector/SvgSelector";

const AddMyPetDetails = ({ onClick }) => {
  const borderStyle = {
    borderColor: "#f43f5e",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    onClick("toYourPetInfo", values);
    setSubmitting(false);
  };

  const backClick = useCallback(() => {
    onClick("toChoose");
  }, [onClick]);

  const fieldCheck = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Enter a pet name";
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
            <label className={contactForm.label}>Name pet</label>
            <Field
              className={contactForm.input}
              type="text"
              name="name"
              placeholder="Type name pet"
              style={errors.name && touched.name ? borderStyle : {}}
            />
            <div className={contactForm.error}>
              {/* <ErrorMessage name="name" component="div" /> */}
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
              //   styles={{ marginBottom: '20' }}
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
                  // onClick={forwardClick}
                >
                  Next
                  <SvgSelector id="pawprint" />
                </button>
              </div>
            </div>

            {/* <button type="button" onClick={backClick}>
              Back
            </button>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddMyPetDetails;
