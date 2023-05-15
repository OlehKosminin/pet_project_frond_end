import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "./styled";
import useToggle from "../../hooks/useToggle";
import Modal from "../../shared/components/Modal/Modal";

function MainPage() {
  const { isOpen, open, close } = useToggle(false);
  return (
    <>
      <Container sx={styled.animal}>
        <Typography variant="h3" sx={styled.title}>
          Take good care of your small pets
        </Typography>
        <button type="button" onClick={open}>
          Open Modal
        </button>
        {isOpen && (
          <Modal isOpen={isOpen} close={close}>
            {/* <ModalCongrats close={close} /> */}
          </Modal>
        )}
      </Container>
    </>
  );
}

export default MainPage;
