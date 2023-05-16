import { Container } from "@mui/material";
// import Loader from "../UserPage/loader";
import NoticesCategoriesList from "../../modules/Noties/NotiesCategoriesList/NotiesCategoriesList";
import NoticesCategoriesNav from "../../modules/Noties/NotiesCategoryNav/NotiesCategoryNav";
// import { NoticesPagination } from "components/Notices/NoticesPagination/NoticesPagination";
import NoticesSearch from "../../modules/Noties/NotiesSeach/NotiesSeach";
import React, { useState } from "react";
import css from "./notiesPage.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import {
//   getNoticeByCategory,
//   getUserNotices,
// } from "../../redux/noties/noties-operations";
// import {
//   getNoteceIsLoadig,
//   getNotices,
//   getOwnNotices,
// } from "../../redux/noties/noties-selector";
// import { clearNotices } from "../../redux/noties/noties-slice";
// import { current } from "../../redux/auth/auth-operations";
// import { isUserLogin } from "../../redux/auth/auth-selector";
// import Typography from "@mui/material/Typography";

function NoticesPage() {

  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   if (categoryName === "favorite") {
  //     dispatch(current());
  //   } else if (categoryName === "owner") {
  //     dispatch(getUserNotices());
  //   } else {
  //     dispatch(getNoticeByCategory({ category: categoryName }));
  //   }
  //   return () => dispatch(clearNotices([]));
  // }, [dispatch, categoryName]);

  // const dataToRender =
  //   categoryName === "favorite"
  //     ? favoriteAds
  //     : categoryName === "owner"
  //     ? ownNotices
  //     : notices.notices;

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };
  const handleClearQuery = () => {
    setQuery("");
  };


  return (
    <Container>
      <div className={css.title}>Find your favorite pet</div>
      <NoticesSearch
        className={css.input}
        query={query}
        onSearch={handleSearch}
        onClearQuery={handleClearQuery}
      />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />;
    </Container>
  );

  // {isLoading ? (
  //       <Loader />
  //     ) : (
  //       <NoticesCategoriesList
  //         categoryName={categoryName}
  //         data={dataToRender}
  //       />
  //     )}
  //   </Container>
  //   {/* <NoticesPagination /> */}
  // </>
}

export default NoticesPage;