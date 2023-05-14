import React from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { current } from '../../../redux/auth/auth-operations';

function UserNavigation() {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.default',
        flexDirection: 'row',
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        color="inherit"
        onClick={() => dispatch(current())}
      >
        <NavLink to="/user">
          <Avatar />
        </NavLink>
      </IconButton>
    </Box>
  );
}

export default UserNavigation;
