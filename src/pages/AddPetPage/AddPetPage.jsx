import style from "./addPetPage.module.scss";
import styleBtn from "./choosenBtn.module.scss";

import { SvgSelector } from "./cvgSelector/SvgSelector";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { activeColor, activeTitle } from "./utils/activeColor";

import AddMyPetDetails from "./AddMyPet/AddMyPetDetails";
import AddMyPetInfo from "./AddMyPet/AddMyPetInfo";
import AddPetForSellDetails from "./AddPetForSell/AddPetForSellDetails";
import AddPetForSellInfo from "./AddPetForSell/AddPetForSellInfo";
// import { width } from "@mui/system";

const AddPetPage = () => {
  const [activeForm, setActiveForm] = useState("");
  const [isBg, setIsBg] = useState("");
  const [date, setDate] = useState({});

  const backClick = (message, date) => {
    setDate(date);
    if (message === "toChoose") {
      setActiveForm("");
    } else if (message === "toYourPetInfo") {
      setActiveForm("yourPetInfo");
    } else if (message === "toYourPet") {
      setActiveForm("yourPet");
    } else if (message === "toForSellInfo") {
      setActiveForm("sellPetInfo");
    } else if (message === "sell") {
      setActiveForm("sell");
    } else if (message === "lost/found") {
      setActiveForm("lost");
    } else if (message === "toLostInfo") {
      setActiveForm("lostPetInfo");
    } else if (message === "toGoodInfo") {
      setActiveForm("goodPetInfo");
    } else if (message === "in good hands") {
      setActiveForm("good");
    }
  };
  // toLostInfo
  useEffect(() => {
    activeColor(activeForm, 1);
    activeColor(activeForm, 2);
    activeColor(activeForm, 3);
    activeTitle(activeForm);
  }, [activeForm]);

  const handleClick = (title) => {
    setIsBg(title);
  };

  return (
    <div className={style.bodyAddPet}>
      <div
        className={
          activeForm === "sellPetInfo" ||
          activeForm === "lostPetInfo" ||
          activeForm === "goodPetInfo"
            ? style.bodyContainerForInfo
            : style.bodyContainer
        }
        // style={{
        //   width:
        // activeForm === "sellPetInfo" ||
        // activeForm === "lostPetInfo" ||
        // activeForm === "goodPetInfo"
        //   ? style.bodyContainerForInfo
        //   : style.bodyContainer,
        // }}
      >
        <p
          style={{
            textAlign:
              activeForm === "sellPetInfo" ||
              activeForm === "lostPetInfo" ||
              activeForm === "goodPetInfo"
                ? "center"
                : "left",
            marginLeft:
              activeForm === "sellPetInfo" ||
              activeForm === "lostPetInfo" ||
              activeForm === "goodPetInfo"
                ? "0"
                : "",
          }}
          className={style.font}
        >
          {activeTitle(activeForm)}
        </p>
        <ul className={style.choosenUl}>
          <li className={style.choosenLi}>
            <p
              style={{
                color: activeColor(activeForm, 1),
              }}
            >
              Choose option
            </p>
            <div
              className={style.choosenUnderline}
              style={{
                backgroundColor: activeColor(activeForm, 1),
              }}
            ></div>
          </li>

          <li className={style.choosenLi}>
            <p
              style={{
                color: activeColor(activeForm, 2),
              }}
            >
              Personal details
            </p>
            <div
              style={{
                backgroundColor: activeColor(activeForm, 2),
              }}
              className={style.choosenUnderline}
            ></div>
          </li>

          <li className={style.choosenLi}>
            <p
              style={{
                color: activeColor(activeForm, 3),
              }}
            >
              More info
            </p>
            <div
              style={{
                backgroundColor: activeColor(activeForm, 3),
              }}
              className={style.choosenUnderline}
            ></div>
          </li>
        </ul>

        {activeForm === "" && (
          <div className={style.ChoosenBtnContainer}>
            <div className={styleBtn.wrapper}>
              <button
                onClick={() => handleClick("yourPet")}
                className={
                  isBg === "yourPet" ? styleBtn.btnChecked : styleBtn.btn
                }
              >
                your pet
              </button>
            </div>

            <div className={styleBtn.wrapper}>
              <button
                onClick={() => handleClick("sell")}
                className={isBg === "sell" ? styleBtn.btnChecked : styleBtn.btn}
              >
                sell
              </button>
            </div>

            <div className={styleBtn.wrapper}>
              <button
                onClick={() => handleClick("lost")}
                className={isBg === "lost" ? styleBtn.btnChecked : styleBtn.btn}
              >
                lost/found
              </button>
            </div>

            <div className={styleBtn.wrapper}>
              <button
                onClick={() => handleClick("good")}
                className={isBg === "good" ? styleBtn.btnChecked : styleBtn.btn}
              >
                in good hands
              </button>
            </div>
          </div>
        )}

        {activeForm === "yourPet" && <AddMyPetDetails onClick={backClick} />}
        {activeForm === "yourPetInfo" && (
          <AddMyPetInfo onClick={backClick} date={date} />
        )}

        {activeForm === "sell" && (
          <AddPetForSellDetails onClick={backClick} addr={"toForSellInfo"} />
        )}
        {activeForm === "sellPetInfo" && (
          <AddPetForSellInfo onClick={backClick} date={date} addr={"sell"} />
        )}

        {activeForm === "lost" && (
          <AddPetForSellDetails onClick={backClick} addr={"toLostInfo"} />
        )}
        {activeForm === "lostPetInfo" && (
          <AddPetForSellInfo
            onClick={backClick}
            date={date}
            addr={"lost/found"}
          />
        )}

        {activeForm === "good" && (
          <AddPetForSellDetails onClick={backClick} addr={"toGoodInfo"} />
        )}
        {activeForm === "goodPetInfo" && (
          <AddPetForSellInfo
            onClick={backClick}
            date={date}
            addr={"in good hands"}
          />
        )}

        {activeForm === "" && (
          <div className={style.downSectionBtn}>
            <div className={style.wrapper}>
              <Link
                to={-1}
                onClick={() => setActiveForm("")}
                className={style.btnCancel}
              >
                <SvgSelector id="arrowLeft" />
                {/* Back */}
                Cancel
              </Link>
            </div>
            <div className={style.wrapper}>
              <button
                onClick={() => setActiveForm(isBg)}
                className={style.btnNext}
              >
                Next
                <div style={{ paddingLeft: "15px" }}>
                  <SvgSelector id="pawprint" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPetPage;
