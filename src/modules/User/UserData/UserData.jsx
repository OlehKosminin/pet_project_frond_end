import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./UserData.module.scss";
import Logout from "../LogoutBtn/LogoutBtn";
import Icon from "../components/Icons";

const UserData = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { name, email, birthday, phone, city, avatar, _id } = useSelector(
    (state) => {
      return state.auth.user;
    }
  );

  const [user, setUser] = useState({
    name: "Andy",
    email: "anna00@gmail.com",
    birthday: "01.01.2010",
    phone: "",

    // phone: "+380979336571",
    city: "Kyiv",
    photo: "",
  });

  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [birthdayEdit, setBirthdayEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);
  const [cityEdit, setCityEdit] = useState(false);
  const [photoEdit, setPhotoEdit] = useState(false);

  const photoPrewiew = (e) => {
    const imageFile = e.target.files[0];
    setUser({ ...user, avatar: imageFile });

    setPhotoEdit(true);
  };

  const changePhoto = () => {
    // setUser({ ...user, photo: photoEdit });
    setPhotoEdit(false);
  };

  const changeName = (e) => {
    e.preventDefault();
    setUser({ ...user, name: e.currentTarget.name.value });
    setNameEdit(false);
  };

  const changeEmail = (e) => {
    e.preventDefault();
    setUser({ ...user, email: e.currentTarget.email.value });
    setEmailEdit(false);
  };

  const formattedDate = (newDate) => {
    let date = new Date(newDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    let formattedDate = day + "." + month + "." + year;
    return formattedDate;
  };

  const changeBirthday = (e) => {
    const bday = formattedDate(e);
    setUser({ ...user, birthday: bday });
    setBirthdayEdit(false);
  };

  const changePhone = (e) => {
    e.preventDefault();
    setUser({ ...user, phone: e.currentTarget.phone.value });
    setPhoneEdit(false);
  };

  const changeCity = (e) => {
    e.preventDefault();
    setUser({ ...user, city: e.currentTarget.city.value });
    setCityEdit(false);
  };

  return (
    <div className={css.userData}>
      <div className={css.userImgWrapper}>
        <img className={css.userImg} src={user.photo} alt="user" />
        {!photoEdit ? (
          <div className={css.btnWrapper}>
            <div className={css.photoInputWrapper}>
              <label htmlFor="photo" className={css.photoInputBtn}>
                <input
                  name="photo"
                  type="file"
                  className={css.photoInput}
                  onChange={photoPrewiew}
                />
                <div className={css.cameraIcon}>
                  <Icon id="camera" />
                </div>
              </label>
            </div>

            <span className={css.userImgBtnText}>Edit photo</span>
          </div>
        ) : (
          <div className={css.btnWrapper}>
            <div className={css.photoInputWrapper}>
              <button
                type="button"
                className={css.userInfoCheckBtn}
                onClick={changePhoto}
              >
                <Icon id="check" />
              </button>
            </div>

            <span className={css.userImgBtnText}>Confirm</span>
          </div>
        )}
      </div>
      <ul className={css.userInfoList}>
        <li className={css.userInfoItem}>
          {nameEdit ? (
            <form onSubmit={changeName}>
              <label className={css.userInfo} htmlFor="name">
                <span className={css.userInfoItemTitle}>Name:</span>
                <div className={css.userInfoItemData}>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    className={css.userInfoItemText}
                  />
                  <button type="submit" className={css.userInfoCheckBtn}>
                    <Icon id="check" />
                  </button>
                </div>
              </label>
            </form>
          ) : (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>Name:</span>
              <div className={css.userInfoItemData}>
                <div className={css.userInfoItemText}>{user.name}</div>
                <button
                  type="button"
                  className={css.userInfoItemBtn}
                  onClick={() => setNameEdit(true)}
                >
                  <Icon id="edit" />
                </button>
              </div>
            </div>
          )}
        </li>
        <li className={css.userInfoItem}>
          {emailEdit ? (
            <form onSubmit={changeEmail}>
              <label className={css.userInfo} htmlFor="email">
                <span className={css.userInfoItemTitle}>Email:</span>
                <div className={css.userInfoItemData}>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    className={css.userInfoItemText}
                  />
                  <button type="submit" className={css.userInfoCheckBtn}>
                    <Icon id="check" />
                  </button>
                </div>
              </label>
            </form>
          ) : (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>Email:</span>
              <div className={css.userInfoItemData}>
                <div className={css.userInfoItemText}>{user.email}</div>
                <button
                  type="button"
                  className={css.userInfoItemBtn}
                  onClick={() => setEmailEdit(true)}
                >
                  <Icon id="edit" />
                </button>
              </div>
            </div>
          )}
        </li>
        <li className={css.userInfoItem}>
          {birthdayEdit ? (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>Birthday:</span>
              <div className={css.userInfoItemData}>
                <DatePicker
                  inline
                  dateFormat="dd.MM.yyyy"
                  onChange={changeBirthday}
                  calendarClassName={css.datepicker}
                />
                <button
                  type="button"
                  className={css.userInfoCheckBtn}
                  onClick={() => setBirthdayEdit(false)}
                >
                  <Icon id="check" />
                </button>
              </div>
            </div>
          ) : (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>Birthday:</span>
              <div className={css.userInfoItemData}>
                <div className={css.userInfoItemText}>{user.birthday}</div>
                <button
                  type="button"
                  className={css.userInfoItemBtn}
                  onClick={() => setBirthdayEdit(true)}
                >
                  <Icon id="edit" />
                </button>
              </div>
            </div>
          )}
        </li>
        <li className={css.userInfoItem}>
          {phoneEdit ? (
            <form onSubmit={changePhone}>
              <label className={css.userInfo} htmlFor="phone">
                <span className={css.userInfoItemTitle}>Phone:</span>
                <div className={css.userInfoItemData}>
                  <input
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    defaultValue={user.phone}
                    className={css.userInfoItemText}
                  />
                  <button type="submit" className={css.userInfoCheckBtn}>
                    <Icon id="check" />
                  </button>
                </div>
              </label>
            </form>
          ) : (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>Phone:</span>
              <div className={css.userInfoItemData}>
                <div className={css.userInfoItemText}>{user.phone}</div>
                <button
                  type="button"
                  className={css.userInfoItemBtn}
                  onClick={() => setPhoneEdit(true)}
                >
                  <Icon id="edit" />
                </button>
              </div>
            </div>
          )}
        </li>
        <li className={css.userInfoItem}>
          {cityEdit ? (
            <form onSubmit={changeCity}>
              <label className={css.userInfo} htmlFor="city">
                <span className={css.userInfoItemTitle}>City:</span>
                <div className={css.userInfoItemData}>
                  <input
                    type="text"
                    name="city"
                    defaultValue={user.city}
                    className={css.userInfoItemText}
                  />
                  <button type="submit" className={css.userInfoCheckBtn}>
                    <Icon id="check" />
                  </button>
                </div>
              </label>
            </form>
          ) : (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>City:</span>
              <div className={css.userInfoItemData}>
                <div className={css.userInfoItemText}>{user.city}</div>
                <button
                  type="button"
                  className={css.userInfoItemBtn}
                  onClick={() => setCityEdit(true)}
                >
                  <Icon id="edit" />
                </button>
              </div>
            </div>
          )}
        </li>
        <Logout />
      </ul>
    </div>
  );
};

export default UserData;
