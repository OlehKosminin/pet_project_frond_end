import React from "react";
import { Container } from "@mui/material";
import styled from "./styled";

function MainPage() {
  return (
    <>
      <Container sx={styled.animal}>
        <h3 sx={styled.title}>Take good care of your small pets</h3>
      </Container>
    </>
  );
}

export default MainPage;
