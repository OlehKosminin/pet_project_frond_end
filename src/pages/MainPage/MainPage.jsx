import React from 'react';
import { Container } from '@mui/material';
import styled from './MainPage.module.scss';
function MainPage() {
  return (
    <>
      <Container className={styled.MainPage}>
        <h3 className={styled.Title}>
          Take good care of your small pets
        </h3>
      </Container>
    </>
  );
}
export default MainPage