import { useState } from "react";
import { ReactComponent as CrossIcon } from "../../../assets/image/icons/cross.svg";
import { ReactComponent as SearchIcon } from "../../../assets/image/icons/search.svg";
import styles from "./notiesSearch.module.scss";
import { useParams } from "react-router-dom";

const initialState = {
  search: "",
  category: "sell",
  page: 1,
  limit: 6,
};

const NoticesSearch = ({ onSearch }) => {
  const [state, setState] = useState({ ...initialState });
  const { category } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      handleClear();
      return;
    }
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClear = () => {
    setState({ ...initialState });
    // onSearch({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("category", category);
    console.log("что попадает в данные для поиска + категория:", state);
    const data = {
      ...state,
      category,
    };
    // setState((prevState) => ({
    //   ...prevState,
    //   category,
    // }));
    console.log("data для отправки в handleSubmit", data);
    onSearch(data);

    setState(initialState);
  };

  const { search } = state;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        required
        value={search}
        className={styles.input}
        onChange={handleChange}
        placeholder="Search"
      />
      <button
        type="submit"
        className={
          search ? `${styles.submitBtn} ${styles.active}` : styles.submitBtn
        }
      >
        <SearchIcon width={24} height={24} />
      </button>
      {search && (
        <button type="button" className={styles.clearBtn} onClick={handleClear}>
          <CrossIcon className={styles.clearBtnIcon} width={24} height={24} />
        </button>
      )}
    </form>
  );
};

export default NoticesSearch;
