import React from "react";
import { Container } from "@mui/material";
import styled from "./styled";

import ModalNotice from "../../modules/ModalNotice/ModalNotice";
import ModalCongrats from "../../modules/ModalCongrats/ModalCongrats";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../../shared/components/Modal/Modal";

function MainPage() {
  const { isOpen, open, close } = useToggle(false);
  return (
    <>
      <Container className={styled.MainPage}>
        <h3 className={styled.Title}>Take good care of your small pets</h3>
        <button type="button" onClick={open}>
          Open Modal
        </button>
        {isOpen && (
          <Modal isOpen={isOpen} close={close}>
            <ModalNotice close={close} />
            {/* <ModalCongrats close={close} /> */}
          </Modal>
        )}
      </Container>
    </>
  );
}
export default MainPage;
