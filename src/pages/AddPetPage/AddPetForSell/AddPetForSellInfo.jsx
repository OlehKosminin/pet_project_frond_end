import React, { useState, useCallback } from "react";
import { Formik, Form, Field } from "formik";
import contactForm from "./addPetForSell.module.css";
import style from "../addPetPage.module.css";
import gender from "./addPetForSellInfo.module.css";

import { SvgSelector } from "../cvgSelector/SvgSelector";
import avatarInput from "../img/avatarInput.png";
import { addMyPet } from "../petsApi/petsApi";

const AddPetForSellInfo = ({ onClick, date, addr }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  // const [isMyPet, setIsMyPet] = useState(date);
  const [isColorToggle, setIsColorToggle] = useState("");
  const [isButtonCange, setIsButtonCange] = useState("");
  // cobst[isValueSex, setIsValueSex] = useState("");

  const borderStyle = {
    borderColor: "#f43f5e",
  };

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
  // const handleGenderCange = (e) => {
  //   setIsValueSex(e.target.value);
  // };

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
      // case !values.price:
      //   errors.price = "Price field is required";
      //   break;
      case !values.comments:
        errors.comments = "Comments field is required";
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
    console.log(isButtonCange);

    try {
      const formData = new FormData();
      formData.append("avatar", avatarFile); // change to  "photoURL"
      formData.append("sex", values.sex);
      formData.append("location", values.location);
      formData.append("price", values.price);
      formData.append("comments", values.comments);
      formData.append("category", values.category);
      formData.append("title", date.title);
      formData.append("name", date.name);
      formData.append("birthday", date.birthday);
      formData.append("breed", date.breed);
      await addMyPet(formData);
      setSubmitting(false);
      console.log(values);
    } catch (error) {
      console.log(error.message);
    }
    await onClick("toChoose");
  };

  return (
    <div className={contactForm.formCell}>
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
                    {errors.sex && touched.sex && <div>{errors.sex}</div>}
                  </div>
                </div>
                <div className={contactForm.avatarField}>
                  <label htmlFor="avatar" className={contactForm.photoLabel}>
                    <div className={contactForm.divLabel}>
                      Load the pet’s image:
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
                </div>
              </div>
              <div>
                <label className={contactForm.label}>Location</label>
                <Field
                  className={contactForm.input}
                  type="text"
                  name="location"
                  placeholder="location"
                  style={errors.location && touched.location ? borderStyle : {}}
                />
                <div className={contactForm.error}>
                  {errors.location && touched.location && (
                    <div>{errors.location}</div>
                  )}
                </div>
                {/* {addr === "cell" && (
                  <div style={{ height: "40px", paddingBottom: "40px" }}></div>
                )} */}
                {addr === "cell" && (
                  <>
                    <label className={contactForm.label}>Price</label>
                    <Field
                      className={contactForm.input}
                      type="text"
                      name="price"
                      placeholder="price"
                      style={errors.price && touched.price ? borderStyle : {}}
                    />
                    <div className={contactForm.error}>
                      {errors.price && touched.price && (
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
                  style={errors.comments && touched.comments ? borderStyle : {}}
                />
                <div className={contactForm.error}>
                  {errors.comments && touched.comments && (
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
                  Cancel
                </button>
              </div>
              <div className={style.wrapper}>
                <button
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

export default AddPetForSellInfo;