import React, { useState, useCallback } from "react";
import { Formik, Form, Field } from "formik";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import initialState from "./initialState";

import contactForm from "./addMyPet.module.scss";
import style from "../addPetPage.module.scss";

import { SvgSelector } from "../cvgSelector/SvgSelector";
import { yyyymmdd } from "../utils/formattedDate";

const AddMyPetDetails = ({ onClick }) => {
  const borderStyle = {
    borderColor: "#f43f5e",
  };

  const [isBtnSubmit, setIsBtnSubmit] = useState(false);

  const [birthday, setBirthday] = useState("");
  const handleBirthdayChange = (setFieldValue, e, d) => {
    if (e) {
      const inputValue = e.target.value;
      let formattedValue = inputValue
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{4})(\d{2})(\d{2})/, "$1$2$3");
      if (formattedValue.length > 4) {
        formattedValue =
          formattedValue.slice(0, 4) + "-" + formattedValue.slice(4);
      }
      if (formattedValue.length > 7) {
        formattedValue =
          formattedValue.slice(0, 7) + "-" + formattedValue.slice(7);
      }
      setFieldValue("birthday", e.target.value);
      setBirthday(formattedValue);
    } else if (d) {
      setFieldValue("birthday", d);
      setBirthday(d);
    }
  };

  const handleParentFocus = () => {
    const inputElement = document.getElementById("birthday");
    if (inputElement) {
      inputElement.focus();
    }
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
    switch (true) {
      case !values.name:
        errors.name = "Name is required";
        break;
      case values.name.length < 2 || values.name.length > 16:
        errors.name = "Name must be between 2 and 16 characters";
        break;

      case !values.birthday:
        errors.birthday = "Enter a date of birth";
        break;
      case !Date.parse(values.birthday):
        errors.birthday = "You have a mistake in the date of birth";
        break;
      case !values.breed:
        errors.breed = "Breed is required";
        break;
      case values.breed.length < 2 || values.breed.length > 16:
        errors.breed = "Breed must be between 2 and 16 characters";
        break;
      default:
        break;
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
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form>
            <label className={contactForm.label}>Name pet</label>
            <Field
              className={contactForm.input}
              type="text"
              name="name"
              placeholder="pet name"
              style={
                isBtnSubmit && errors.name && touched.name ? borderStyle : {}
              }
            />
            <div className={contactForm.error}>
              {/* <ErrorMessage name="name" component="div" /> */}
              {isBtnSubmit && errors.name && touched.name && (
                <div>{errors.name}</div>
              )}
            </div>

            <label className={contactForm.label}>Data of birth</label>
            <div
              style={
                isBtnSubmit && errors.birthday && touched.birthday
                  ? borderStyle
                  : {}
              }
              tabIndex="0"
              onFocus={handleParentFocus}
              className={contactForm.dataDiv}
            >
              <Field
                id="birthday"
                className={contactForm.dataInput}
                type="text"
                maxLength={10}
                name="birthday"
                value={birthday}
                onChange={(e) => {
                  e.preventDefault();
                  handleBirthdayChange(setFieldValue, e, null);
                }}
                placeholder={"yyyy-mm-dd"}
                style={
                  isBtnSubmit && errors.birthday && touched.birthday
                    ? borderStyle
                    : {}
                }
              />
              <div className={contactForm.dataPicker}>
                <DatePicker
                  tabIndex="-1"
                  style={{ with: "24px" }}
                  customInput={
                    <button
                      type="button"
                      tabIndex="-1"
                      style={{ border: "none" }}
                    >
                      <SvgSelector id="calendar" />
                    </button>
                  }
                  format="yyyy-mm-dd"
                  maxDate={new Date()}
                  onChange={(date) => {
                    handleBirthdayChange(setFieldValue, null, yyyymmdd(date));
                  }}
                />
              </div>
            </div>

            <div className={contactForm.error}>
              {isBtnSubmit && errors.birthday && touched.birthday && (
                <div>{errors.birthday}</div>
              )}
            </div>

            <label className={contactForm.label}>Breed</label>
            <Field
              className={contactForm.input}
              type="text"
              name="breed"
              placeholder="pet breed"
              style={
                isBtnSubmit && errors.breed && touched.breed ? borderStyle : {}
              }
            />
            <div className={contactForm.error}>
              {isBtnSubmit && errors.breed && touched.breed && (
                <div>{errors.breed}</div>
              )}
            </div>

            <div style={{ marginTop: "36px" }} className={style.downSectionBtn}>
              <div className={style.wrapper}>
                <button
                  type="button"
                  onClick={backClick}
                  className={style.btnCancel}
                >
                  <SvgSelector id="arrowLeft" />
                  Back
                </button>
              </div>
              <div className={style.wrapper}>
                <button
                  onClick={() => {
                    setIsBtnSubmit(true);
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className={style.btnNext}
                >
                  Next
                  <div style={{ paddingLeft: "15px" }}>
                    <SvgSelector id="pawprint" />
                  </div>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddMyPetDetails;
