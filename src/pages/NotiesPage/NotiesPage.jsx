import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import NoticesCategoriesList from "../../modules/Noties/NotiesCategoriesList/NotiesCategoriesList";
import NoticesCategoriesNav from "../../modules/Noties/NotiesCategoryNav/NoticesCategoryNav";
import NoticesSearch from "../../modules/Noties/NotiesSeach/NotiesSeach";
import { searchNotices } from "../../redux/noties/noties-operations";

import css from "./notiesPage.module.scss";

const initialState = {
  category: "sell",
  search: "",
  page: 1,
  limit: 6,
};

function NoticesPage() {
  const [searchParams, setSearchParams] = useSearchParams({ ...initialState });
  const dispatch = useDispatch();

  const handleSearch = (newSearch) => {
    setSearchParams(newSearch);
    dispatch(searchNotices(newSearch));
  };

  return (
    <div className={css.container}>
      <div className={css.title}>Find your favorite pet</div>
      <NoticesSearch className={css.input} onSearch={handleSearch} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </div>
  );

  // {isLoading ? (
  //       <Loader />
  //     ) : (
  //       <NoticesCategoriesList />
  //     )}
  //    <NoticesPagination />
}

export default NoticesPage;
