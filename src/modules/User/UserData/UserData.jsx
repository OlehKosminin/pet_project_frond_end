import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./UserData.module.scss";
import Logout from "../LogoutBtn/LogoutBtn";
import cameraIcon from "../../../assets/image/icons/camera.svg";
import checkIcon from "../../../assets/image/icons/check.svg";
import editIcon from "../../../assets/image/icons/edit.svg";
import { updUserInfo } from "../../../redux/auth/auth-operations";
import { getCurrentUser } from "../../../redux/user/user-selectors";

const UserData = () => {
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [birthdayEdit, setBirthdayEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);
  const [cityEdit, setCityEdit] = useState(false);
  const [photoEdit, setPhotoEdit] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [startDate, setStartDate] = useState(
    user.birthday ? new Date(user.birthday) : null
  );

  const photoPrewiew = (e) => {
    const imageFile = e.target.files[0];
    const imageURL = URL.createObjectURL(imageFile);
    setPhotoLoaded(imageURL);
    setPhotoEdit(imageFile);
  };

  const changePhoto = () => {
    dispatch(updUserInfo({ ...user, avatar: photoEdit }));
    setPhotoEdit(false);
  };

  const changeName = (e) => {
    e.preventDefault();
    dispatch(updUserInfo({ ...user, name: e.currentTarget.name.value }));
    setNameEdit(false);
  };

  const changeEmail = (e) => {
    e.preventDefault();
    dispatch(updUserInfo({ ...user, email: e.currentTarget.email.value }));
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

  const styledBirthday = formattedDate(startDate);

  const changeBirthday = () => {
    dispatch(updUserInfo({ ...user, birthday: startDate }));
    setBirthdayEdit(false);
  };

  const changePhone = (e) => {
    e.preventDefault();
    dispatch(updUserInfo({ ...user, phone: e.currentTarget.phone.value }));
    setPhoneEdit(false);
  };

  const changeCity = (e) => {
    e.preventDefault();
    dispatch(updUserInfo({ ...user, city: e.currentTarget.city.value }));
    setCityEdit(false);
  };

  return (
    <div className={css.userData}>
      <div className={css.userImgWrapper}>
        <img
          className={css.userImg}
          src={!photoLoaded ? user.avatarUrl : photoLoaded}
          alt="user"
        />
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
                <img src={cameraIcon} alt="camera icon" />
              </label>
            </div>

            <span className={css.userImgBtnText}>Edit photo</span>
          </div>
        ) : (
          <div className={css.btnWrapper}>
            <div className={css.photoInputWrapper}>
              <button
                type="button"
                className={css.userImgBtn}
                onClick={changePhoto}
              >
                <img src={checkIcon} alt="check icon" />
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
                  <button type="submit" className={css.userInfoItemBtn}>
                    <img src={checkIcon} alt="check icon" />
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
                  <img src={editIcon} alt="edit icon" />
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
                  <button type="submit" className={css.userInfoItemBtn}>
                    <img src={checkIcon} alt="check icon" />
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
                  <img src={editIcon} alt="edit icon" />
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
                  dateFormat="dd.MM.yyyy"
                  selected={startDate ? startDate : null}
                  onChange={(date) => setStartDate(date)}
                  calendarClassName={css.datepicker}
                  maxDate={new Date()}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className={css.userInfoDate}
                />
                <button
                  type="submit"
                  className={css.userInfoItemBtn}
                  onClick={changeBirthday}
                >
                  <img src={checkIcon} alt="check icon" />
                </button>
              </div>
            </div>
          ) : (
            <div className={css.userInfo}>
              <span className={css.userInfoItemTitle}>Birthday:</span>
              <div className={css.userInfoItemData}>
                <div className={css.userInfoItemText}>
                  {user.birthday ? styledBirthday : null}
                </div>
                <button
                  type="button"
                  className={css.userInfoItemBtn}
                  onClick={() => setBirthdayEdit(true)}
                >
                  <img src={editIcon} alt="edit icon" />
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
                  <button type="submit" className={css.userInfoItemBtn}>
                    <img src={checkIcon} alt="check icon" />
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
                  <img src={editIcon} alt="edit icon" />
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
                  <button type="submit" className={css.userInfoItemBtn}>
                    <img src={checkIcon} alt="check icon" />
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
                  <img src={editIcon} alt="edit icon" />
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
