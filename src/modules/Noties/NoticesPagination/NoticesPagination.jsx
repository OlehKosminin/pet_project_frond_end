import { useParams } from "react-router";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import css from "./NoticesPagination.module.scss";
import {
  fetchAllNotices,
  fetchOwnNotices,
  fetchFavoriteNotices,
} from "../../../redux/noties/noties-operations";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../../redux/noties/noties-selector";

const NoticesPagination = () => {
  const { count } = useSelector(getNotices);
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const search = searchParams.get("search");

  const checkCount = () => {
    if (count && limit && Number(count) > Number(limit)) {
      const newCount = Number(count) / Number(limit);
      return newCount;
    }
    if (count && Number(count) > 12) {
      const newCount = Number(count) / 12;
      return newCount;
    }
    return 1;
  };

  const checkPage = () => {
    if (page > 1) {
      return page - 1;
    }
    return 0;
  };

  const handlePageChange = (selectedPage) => {
    const newPage = Number(selectedPage.selected) + 1;
    const request = {
      category,
      page: newPage,
      limit,
      search,
    };

    if (category === "favorite") {
      dispatch(fetchFavoriteNotices(request));
      setSearchParams({ page: newPage, limit, search });
      return;
    }
    if (category === "my-pets") {
      dispatch(fetchOwnNotices(request));
      setSearchParams({ page: newPage, limit, search });
      return;
    }
    if (search) {
    }
    setSearchParams({ page: newPage, limit, search });
    dispatch(fetchAllNotices(request));
  };

  return (
    <div className={css.paginationWrapper}>
      <ReactPaginate
        pageCount={Math.ceil(checkCount())}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={""}
        containerClassName={css.pagination}
        previousLinkClassName={css.paginationLink}
        nextLinkClassName={css.paginationLink}
        pageLinkClassName={css.paginationLink}
        activeLinkClassName={css.paginationActiveLink}
        disableInitialCallback={true}
        forcePage={checkPage()}
        onPageChange={handlePageChange}
        marginPagesDisplayed={0}
        pageRangeDisplayed={4}
      />
    </div>
  );
};

export default NoticesPagination;
