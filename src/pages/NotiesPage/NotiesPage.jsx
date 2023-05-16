import { Container } from "@mui/material";
import NoticesCategoriesList from "../../modules/Noties/NotiesCategoriesList/NotiesCategoriesList";
import NoticesCategoriesNav from "../../modules/Noties/NotiesCategoryNav/NotiesCategoryNav";
import NoticesSearch from "../../modules/Noties/NotiesSeach/NotiesSeach";
import React, { useState } from "react";
import css from "./notiesPage.module.scss";
ography from "@mui/material/Typography";

function NoticesPage() {

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
