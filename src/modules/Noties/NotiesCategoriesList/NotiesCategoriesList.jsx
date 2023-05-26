import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import NoticesPagination from "../NoticesPagination/NoticesPagination";
import NotiesCategoryItem from "../NotiesCategotyItem/NotiesCategotyItem";
import Loader from "../../../shared/components/Loader/Loader";

import {
  getNoteceIsLoadig,
  getNotices,
} from "../../../redux/noties/noties-selector";
import {
  fetchAllNotices,
  fetchOwnNotices,
  fetchFavoriteNotices,
} from "../../../redux/noties/noties-operations";

const NotiesCategoriesList = () => {
  const { category } = useParams();
  const notices = useSelector(getNotices);
  const isLoadingNotices = useSelector(getNoteceIsLoadig);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category === "my-pets") {
      dispatch(fetchOwnNotices({ page: 1 }));
    }

    if (category === "favorite") {
      dispatch(fetchFavoriteNotices({ page: 1 }));
    }
    if (
      category === "sell" ||
      category === "lost found" ||
      category === "in good hands"
    ) {
      dispatch(fetchAllNotices({ category, page: 1 }));
    }
  }, [dispatch, category]);

  return (
    <>
      <div>
        {isLoadingNotices ? <Loader /> : <NotiesCategoryItem items={notices} />}
        <NoticesPagination />
      </div>
    </>
  );
};

export default NotiesCategoriesList;
