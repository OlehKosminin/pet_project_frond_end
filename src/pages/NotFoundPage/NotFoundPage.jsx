import { Link } from "react-router-dom";

import styles from "./not-found-image.module.scss";
import notFoundMobileImage from "../../assets/image/notFound/notFound-mobile@2x.png";
import notFoundTabletImage from "../../assets/image/notFound/notFound-tablet@2x.png";
import notFoundDesktopImage from "../../assets/image/notFound/notFound-desktop@2x.png";
import { SvgSelector } from "../AddPetPage/cvgSelector/SvgSelector";

const NotFoundPage = () => {
  const screenWidth = window.innerWidth;

  let notFoundImage;
  if (screenWidth <= 767) {
    notFoundImage = notFoundMobileImage;
  } else if (screenWidth <= 1280) {
    notFoundImage = notFoundTabletImage;
  } else {
    notFoundImage = notFoundDesktopImage;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.background}></div>

        <p className={styles.heading}>Ooops! This page not found :(</p>
        <img src={notFoundImage} alt="Not Found" className={styles.image} />

        <div className={styles.buttonContainer}>
          <Link className={styles.link} to="/">
            <button type="button" className={styles.button}>
              <p className={styles.text}>To main page</p>
              <SvgSelector id="pawprint" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
