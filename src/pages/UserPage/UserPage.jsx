import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import UserData from "../../modules/User/UserData/UserData";
import PetsData from "../../modules/User/PetsList/PetsList";
import Loader from "./loader";
import { isUserLogin } from "../../redux/auth/auth-selector";
import styled from "./styledUser";
import { Button } from "@mui/material";

function UserPage() {
  const Loading = useSelector(isUserLogin);
  return (
    <div>
      <Container sx={styled.headlines}>
        <h2 sx={styled.information}>My information:</h2>
        <h2 sx={styled.pets}>
          {" "}
          My pets:
          <Button sx={styled.btnAdd}>Add pets +</Button>
        </h2>
      </Container>

      {Loading ? (
        <Loader />
      ) : (
        <Container sx={styled.container}>
          <UserData />
          <PetsData />
        </Container>
      )}
    </div>
  );
}

export default UserPage;
