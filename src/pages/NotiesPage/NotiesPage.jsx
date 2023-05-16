import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAnimalsByCategory } from "./fake-api";

import NotiesCategoriesList from "../../modules/Noties/NotiesCategoriesList/NotiesCategoriesList";

const NotiesPage = () => {
  const [animalsList, setAnimalsList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchAnimalsByCategory = async () => {
      try {
        const result = await getAnimalsByCategory(category);
        setAnimalsList(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchAnimalsByCategory();
  }, [category]);

  return (
    <div>
      {" "}
      NotiesPage
      <NotiesCategoriesList />
    </div>
  );
};

export default NotiesPage;

// ********************************

// import { Container } from "@mui/material";
// // import Loader from "";
// import NoticesCategoriesList from "../../modules/Noties/NotiesCategoriesList/NotiesCategoriesList";
// import NoticesCategoriesNav from "../../modules/Noties/NotiesCategoryNav/NotiesCategoryNav";
// // import { NoticesPagination } from "components/Notices/NoticesPagination/NoticesPagination";
// import NoticesSearch from "../../modules/Noties/NotiesSeach/NotiesSeach";
// import React, { useEffect, useState } from "react";
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

// function NoticesPage() {
// const { categoryName } = useParams();
// const notices = useSelector(getNotices);
// const isLoading = useSelector(getNoteceIsLoadig);
// const favoriteNotices = useSelector(isUserLogin);
// const favoriteAds = favoriteNotices?.user?.favorite || [];
// const ownNotices = useSelector(getOwnNotices);
// const dispatch = useDispatch();

// const [query, setQuery] = useState("");

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

// const handleSearch = (newQuery) => {
//   setQuery(newQuery);
// };

//   const handleClearQuery = () => {
//     setQuery("");
//   };

//   return (
//     <>
//       <Container>
//         <div
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "148px",
//             fontWeight: 700,
//             fontSize: 48,
//           }}
//           variant="h1"
//         >
//           Find your favorite pet
//         </div>

//         {/* <NoticesSearch
//           query={query}
//           onSearch={handleSearch}
//           onClearQuery={handleClearQuery}
//         /> */}
//         <NoticesCategoriesNav />

//         {/* {isLoading ? (
//           // <Loader />
//           <p>...Loading</p>
//         ) : (
//           <NoticesCategoriesList
//             categoryName={categoryName}
//             data={dataToRender}
//           />
//         )} */}
//       </Container>
//       {/* <NoticesPagination /> */}
//     </>
//   );
// }

// export default NoticesPage;
