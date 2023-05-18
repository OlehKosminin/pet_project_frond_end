import { Container, Typography } from '@mui/material';
import Loader from '../../shared/components/Loader/Loader';
import OurFriendsList from '../../shared/components/OurFriends/OurFriendsList/OurFriendsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../redux/friends/friends-operations';
import { selectIsisLoaded } from '../../redux/friends/friends-selector';
import styles from './styles';

function OurFriendsPage() {
  const dispatch = useDispatch();

  const isLoad = useSelector(selectIsisLoaded);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <>
      <Container sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          Our friends
        </Typography>
        {isLoad ? <OurFriendsList /> : <Loader />}
      </Container>
    </>
  );
}

export default OurFriendsPage;
