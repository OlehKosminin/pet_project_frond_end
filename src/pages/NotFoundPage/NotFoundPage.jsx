import styles from "../../shared/components/sass/authPages.module.scss";
import style from "./not-found-image.module.scss";
import notFoundMobileImage from "../../assets/image/notFound/notFound-mobile@2x.png";
import notFoundTabletImage from "../../assets/image/notFound/notFound-tablet@2x.png";
import notFoundDesktopImage from "../../assets/image/notFound/notFound-desktop@2x.png";

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
      <div className={styles.background}></div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Ooops! This page not found :(</h1>

        <img src={notFoundImage} alt="Not Found" className={styles.image} />
      </div>
    </div>
  );
};

export default NotFoundPage;
