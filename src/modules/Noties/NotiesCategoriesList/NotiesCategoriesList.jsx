import { useState, useEffect } from "react";
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
  deleteNotice,
} from "../../../redux/noties/noties-operations";
import { myAddFavoriteNotices } from "../../../redux/noties/noties-operations";



const NotiesCategoriesList = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  // console.log(page, "paginatPage");
  const notices = useSelector(getNotices);
  const isLoadingNotices = useSelector(getNoteceIsLoadig);

  // console.log("notices____", notices);

  // const [ state, setState ] = useState();
  const dispatch = useDispatch();
 



  useEffect(() => {
    if (category === "my-pets") {
      dispatch(fetchOwnNotices({ page }));
    }

    if (category === "favorite") {
      dispatch(fetchFavoriteNotices({ page }));
    }
    if (
      category === "sell" ||
      category === "lost found" ||
      category === "in good hands"
    ) {
      dispatch(fetchAllNotices({ category, page }));
    }
  }, [dispatch, category, page]);



  
 

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
