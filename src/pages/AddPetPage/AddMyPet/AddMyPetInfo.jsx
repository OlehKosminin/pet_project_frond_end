import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addPet } from "../../../redux/pets/pets-operations";

import contactForm from "./addMyPet.module.scss";
import style from "../addPetPage.module.scss";
import { SvgSelector } from "../cvgSelector/SvgSelector";
import ModalServerError from "../ModalServerError/ModalServerError";
import { ColorRing } from "react-loader-spinner";

import avatarInput from "../img/avatarInput.png";

const AddMyPetInfo = ({ onClick, date }) => {
  const borderStyle = {
    borderColor: "#f43f5e",
  };

  const [imageUrl, setImageUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [isBtnSubmit, setIsBtnSubmit] = useState(false);

  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  // const [isFetchOk, setIsFetchOk] = useState(false);

  const [isError, setIsError] = useState(false);
  const errorModal = useCallback((data) => {
    setIsError(data);
  }, []);

  const history = useNavigate();
  const dispatch = useDispatch();

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
    switch (true) {
      case !avatarFile:
        errors.avatar = "Photo is required";
        break;
      // case !values.comments:
      //   errors.comments = "Comments field is required";
      //   break;
      // case values.comments.length < 8:
      //   errors.comments = "This field must contain at least 8 characters";
      //   break;
      // case values.comments.length > 120:
      //   errors.comments = "This field should not exceed 20 characters";
      //   break;
      default:
        break;
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsFormSubmitting(false);
    try {
      const formData = new FormData();
      if (avatarFile) {
        formData.append("image", avatarFile);
      }
      formData.append("comments", values.comments);
      formData.append("name", date.name);
      formData.append("birthday", Date.parse(date.birthday));
      formData.append("breed", date.breed);

      dispatch(addPet(formData)).then((response) => {
        if (!response.error) {
          history(-1);
        } else {
          setIsFormSubmitting(true);
          setIsError(true);
        }
      });
      setSubmitting(false);
      // setIsFetchOk(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={contactForm.form}>
      {isError && <ModalServerError close={errorModal} />}
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
                  <div className={contactForm.imgErrDiv}>
                    <img
                      className={contactForm.avatarImg}
                      src={imageUrl ? imageUrl : avatarInput}
                      alt="avatar"
                    />
                    <div
                      style={{ padding: 0, textAlign: "center" }}
                      className={contactForm.error}
                    >
                      {isBtnSubmit && errors.avatar && (
                        <div>{errors.avatar}</div>
                      )}
                    </div>
                  </div>
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
                  // style={{ padding: "0" }}
                  onClick={() => {
                    setIsBtnSubmit(true);
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className={style.btnNext}
                >
                  Done
                  {!isFormSubmitting && (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#FFC107",
                        "#FDF7F2",
                        "#00C3AD",
                        "#00C3AD",
                        "#F43F5E",
                      ]}
                    />
                  )}
                  {isFormSubmitting && (
                    <div style={{ paddingLeft: "15px" }}>
                      <SvgSelector id="pawprint" />
                    </div>
                  )}
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
