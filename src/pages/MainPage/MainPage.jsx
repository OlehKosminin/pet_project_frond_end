import React from "react";
import { Container } from "@mui/material";
import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <>
      <Container className={styled.mainPage}>
        <h3 className={styled.title}>
          Take good care of your small pets
        </h3>
      </Container>
    </>
  );
}
export default MainPage;
