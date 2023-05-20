import React, { useState, useCallback } from "react";
import { Formik, Form, Field } from "formik";

import contactForm from "./addMyPet.module.css";
import style from "../addPetPage.module.scss";
import { SvgSelector } from "../cvgSelector/SvgSelector";

import avatarInput from "../img/avatarInput.png";

import { addMyPet } from "../petsApi/petsApi";

const AddMyPetInfo = ({ onClick, date }) => {
  const borderStyle = {
    borderColor: "#f43f5e",
  };

  const [imageUrl, setImageUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [isBtnSubmit, setIsBtnSubmit] = useState(false);
  // const [isMyPet, setIsMyPet] = useState(date);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImageUrl(event.target.result);
      };

      reader.readAsDataURL(file);
      setAvatarFile(file);
    }
  };

  const backClick = useCallback(() => {
    onClick("toYourPet");
  }, [onClick]);

  const fieldCheck = (values) => {
    const errors = {};
    if (!values.comments) {
      errors.comments = "Comments field is required";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      if (avatarFile) {
        formData.append("photoURL", avatarFile);
      } // change to  "photoURL"
      formData.append("comments", values.comments);
      formData.append("name", date.name);
      formData.append("data", Date.parse(date.birthday));
      formData.append("breed", date.breed);
      formData.append("category", "your pet");
      for (let value of formData.values()) {
        console.log(value);
      }
      await addMyPet(formData);
      setSubmitting(false);
    } catch (error) {
      console.log(error.message);
    }
    await onClick("toChoose");
  };

  return (
    <div className={contactForm.form}>
      <Formik
        initialValues={{ comments: "", category: "" }}
        validate={fieldCheck}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <div className={contactForm.avatarField}>
                <label htmlFor="avatar" className={contactForm.photoLabel}>
                  <div className={contactForm.divLabel}>Add photo</div>
                  <img
                    className={contactForm.avatarImg}
                    src={imageUrl ? imageUrl : avatarInput}
                    alt="avatar"
                  />
                </label>

                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <label className={contactForm.label}>Comments</label>
            <Field
              className={contactForm.commentsInput}
              as="textarea"
              rows="3"
              name="comments"
              placeholder="Your comments"
              style={
                isBtnSubmit && errors.comments && touched.comments
                  ? borderStyle
                  : {}
              }
            />
            <div className={contactForm.error}>
              {isBtnSubmit && errors.comments && touched.comments && (
                <div>{errors.comments}</div>
              )}
            </div>

            <div style={{ marginTop: "3px" }} className={style.downSectionBtn}>
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
                  Done
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

export default AddMyPetInfo;
