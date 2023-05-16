import styles from "./ArticleNews.module.scss";

const ArticleNews = ({ imgUrl, title, text, date, url }) => {
  function getFormattedDate(dataref) {
    const newData = new Date(dataref);
    let year = newData.getFullYear();
    let month = (1 + newData.getMonth()).toString().padStart(2, "0");
    let day = newData.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  }

  const refData = getFormattedDate(date);

  return (
    <article className={styles.news}>
      <div className={styles.news__containerImg}>
        <img src={imgUrl} alt="name" className={styles.news__img} />
      </div>
      <div className={styles.news__info}>
        <h2 className={styles.news__title}>{title}</h2>
        <p className={styles.news__text}>{text}</p>
        <div className={styles.news__block}>
          <p className={styles.news__date}>{refData}</p>
          <a href={url} className={styles.news__readMore} target="_blank">
            Read more
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleNews;
