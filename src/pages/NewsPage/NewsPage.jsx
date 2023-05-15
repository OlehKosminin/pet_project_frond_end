import { useState, useEffect } from "react";
import news from "./allArticles.json";

import baseStyles from "../../shared/components/sass/baseStyle.module.scss";
import styles from "./newsPage.module.scss";
import ArticleNews from "./ArticleNews/ArticleNews";
const NewsPage = () => {
  const [state, setState] = useState([]);
  const [searchState, setSearchState] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(6);
  const [searchNow, setSearchNow] = useState(false);

  useEffect(() => {
    if (searchState.length === 0) {
      const newArrNews = news.slice(0, total);
      setState(newArrNews);
    }
  }, [total]);

  const loadNews = () => {
    setTotal((prev) => prev + 6);
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const getSearchNews = (e) => {
    e.preventDefault();
    const normalizedFilter = search.toLocaleLowerCase();
    const filteredNews = news.filter(({ title }) => {
      return title.toLocaleLowerCase().includes(normalizedFilter);
    });
    setSearchState(filteredNews);
    setSearchNow(true);
  };

  const clearSearch = () => {
    setSearchState([]);
    setSearch("");
    setState([]);
    setTotal(6);
    setSearchNow(false);
  };

  return (
    <section className={baseStyles.sectionNews}>
      <div className={baseStyles.container}>
        <h1 className={styles.namePage}>News</h1>
        <div className={styles.containerSearch}>
          <form className={styles.search__form} onSubmit={getSearchNews}>
            <input
              type="text"
              className={styles.search__input}
              placeholder="Search"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={search}
              onChange={handleSearch}
            />
            <button type="submit" className={styles.search__button}>
              submit
            </button>
          </form>
          <button type="button" onClick={clearSearch}>
            Clear search
          </button>
        </div>
        <div className={styles.containerNews}>
          {!searchNow
            ? state.map((news) => <ArticleNews key={news.id} {...news} />)
            : searchState.map((news) => (
                <ArticleNews key={news.id} {...news} />
              ))}
          {searchState.length === 0 && searchNow && <p>error</p>}
        </div>
        <div className={styles.btnContainer}>
          {!searchNow && (
            <button
              type="button"
              className={styles.btn__more}
              onClick={loadNews}
            >
              More...
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
