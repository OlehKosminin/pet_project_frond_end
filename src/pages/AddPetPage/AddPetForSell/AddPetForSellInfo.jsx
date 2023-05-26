import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import contactForm from "./addPetForSell.module.scss";
import style from "../addPetPage.module.scss";
import gender from "./addPetForSellInfo.module.scss";

import { useDispatch } from "react-redux";
import { addNotices } from "../../../redux/noties/noties-operations";

import { SvgSelector } from "../cvgSelector/SvgSelector";
import avatarInput from "../img/avatarInput.png";
import ModalServerError from "../ModalServerError/ModalServerError";

import { ColorRing } from "react-loader-spinner";

const AddPetForSellInfo = ({ onClick, date, addr }) => {
  const [isBtnSubmit, setIsBtnSubmit] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [isColorToggle, setIsColorToggle] = useState("");
  const [isButtonCange, setIsButtonCange] = useState("");

  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  // const [isFetchOk, setIsFetchOk] = useState(false);

  const [isError, setIsError] = useState(false);
  const errorModal = useCallback((data) => {
    setIsError(data);
  }, []);

  const borderStyle = {
    borderColor: "#f43f5e",
  };

  const history = useNavigate();
  const dispatch = useDispatch();

  const colorToggle = (male) => {
    setIsColorToggle(male);
  };

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

  const backClick = useCallback(
    (addr) => {
      onClick(addr);
    },
    [onClick]
  );

  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      case !values.location:
        errors.location = "Location field is required";
        break;
      case !values.price && addr === "sell":
        errors.price = "Price field is required";
        break;
      case values.price < 0 || (values.price > 100000 && addr === "sell"):
        errors.price = "Price must be between 0 and 100000";
        break;
      case !values.comments:
        errors.comments = "Comments field is required";
        break;
      case values.comments.length < 8:
        errors.comments = "This field must contain at least 8 characters";
        break;
      case values.comments.length > 120:
        errors.comments = "This field should not exceed 20 characters";
        break;
      case !avatarFile:
        errors.avatar = "Photo is required";
        break;
      case !values.sex:
        errors.sex = "Gender field is required";
        break;
      default:
        break;
    }
    return errors;
  };

  const handleGenderToggle = (val) => {
    setIsButtonCange(val);
  };

  const handleSexButton = (val, setFieldValue) => {
    setFieldValue("sex", val);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsFormSubmitting(false);
    try {
      const formData = new FormData();

      formData.append("sex", values.sex);
      formData.append("location", values.location);
      formData.append("comments", values.comments);
      formData.append("category", values.category);
      formData.append("title", date.title);
      formData.append("image", avatarFile);
      formData.append("birthday", Date.parse(date.birthday.toString()));
      formData.append("breed", date.breed);
      formData.append("name", date.name);
      if (addr === "sell") {
        formData.append("price", values.price.toString());
      }

      dispatch(addNotices(formData)).then((response) => {
        if (!response.error) {
          history(-1);
        } else {
          // Обработка других статусов ответа сервера
          setIsFormSubmitting(true);
          setIsError(true);
        }
      });

      setSubmitting(false);

      // setIsFetchOk(true);
    } catch (error) {
      setIsFormSubmitting(true);
      console.log("Error ", error.message);
    }
  };

  return (
    <div className={contactForm.formCell}>
      {isError && <ModalServerError close={errorModal} />}
      <Formik
        initialValues={{
          location: "",
          price: "",
          comments: "",
          category: addr,
          sex: "",
        }}
        validate={fieldCheck}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting, errors, touched, setFieldValue }) => (
          <Form>
            <div className={contactForm.container}>
              <div>
                <div className={gender.genderSection}>
                  <label className={gender.genderLabel}>The Sex</label>
                  <div className={gender.genderBtnDiv}>
                    <Field
                      type="hidden"
                      id="sex"
                      name="sex"
                      value={values.sex}
                    />
                    <button
                      onMouseEnter={() => colorToggle("female")}
                      onMouseLeave={() => colorToggle("")}
                      className={gender.genderBtn}
                      type="button"
                      style={{
                        color:
                          isColorToggle === "female" ||
                          isButtonCange === "female"
                            ? "#54ADFF"
                            : "#888888",
                      }}
                      onClick={() => {
                        handleGenderToggle("female");
                        handleSexButton("female", setFieldValue);
                      }}
                    >
                      <SvgSelector
                        color={
                          isColorToggle === "female" ||
                          isButtonCange === "female"
                            ? "#F43F5E"
                            : "#888888"
                        }
                        id="female"
                      />
                      Female
                    </button>
                    <button
                      onMouseEnter={() => colorToggle("male")}
                      onMouseLeave={() => colorToggle("")}
                      className={gender.genderBtn}
                      type="button"
                      style={{
                        color:
                          isColorToggle === "male" || isButtonCange === "male"
                            ? "#54ADFF"
                            : "#888888",
                      }}
                      onClick={() => {
                        handleGenderToggle("male");
                        handleSexButton("male", setFieldValue);
                      }}
                    >
                      <SvgSelector
                        color={
                          isColorToggle === "male" || isButtonCange === "male"
                            ? "#54ADFF"
                            : "#888888"
                        }
                        id="male"
                      />
                      Male
                    </button>
                  </div>
                  <div className={contactForm.error}>
                    {isBtnSubmit && errors.sex && touched.sex && (
                      <div>{errors.sex}</div>
                    )}
                  </div>
                </div>
                <div className={contactForm.avatarField}>
                  <label htmlFor="avatar" className={contactForm.photoLabel}>
                    <div className={contactForm.divLabel}>
                      {/* Load the pet’s image: */}
                    </div>
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
                  <div
                    style={{ padding: 0, textAlign: "center" }}
                    className={contactForm.error}
                  >
                    {isBtnSubmit && errors.avatar && <div>{errors.avatar}</div>}
                  </div>
                </div>
              </div>
              <div>
                <label className={contactForm.label}>Location</label>
                <Field
                  className={contactForm.input}
                  type="text"
                  name="location"
                  placeholder="location"
                  style={
                    isBtnSubmit && errors.location && touched.location
                      ? borderStyle
                      : {}
                  }
                />
                <div className={contactForm.error}>
                  {isBtnSubmit && errors.location && touched.location && (
                    <div>{errors.location}</div>
                  )}
                </div>
                {addr === "sell" && (
                  <>
                    <label className={contactForm.label}>Price</label>
                    <Field
                      className={contactForm.input}
                      type="number"
                      name="price"
                      placeholder="price"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      style={
                        isBtnSubmit && errors.price && touched.price
                          ? borderStyle
                          : {}
                      }
                    />
                    <div className={contactForm.error}>
                      {isBtnSubmit && errors.price && touched.price && (
                        <div>{errors.price}</div>
                      )}
                    </div>
                  </>
                )}

                <label className={contactForm.label}>Comments</label>
                <Field
                  className={contactForm.commentsInput}
                  as="textarea"
                  rows="5"
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
              </div>
            </div>

            <div style={{ marginTop: "3px" }} className={style.downSectionBtn}>
              <div className={style.wrapper}>
                <button
                  type="button"
                  onClick={() => backClick(addr)}
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

export default AddPetForSellInfo;
