import { Box } from "@mui/material";
import React from "react";
import { NavLink as Routerlink } from "react-router-dom";

function AuthNavigation() {
  return (
    <Box mr={1}>
      <button
        component={Routerlink}
        to="/login"
        variant="outlined"
        color="accent"
        sx={{
          height: 40,
          width: 165,
          borderRadius: 5,
          border: 2,
          "&:hover": {
            border: 2,
          },
          "&.active": {
            backgroundColor: "accent.main",
            color: "text.light",
            borderColor: "accent.main",
          },
        }}
      >
        Log IN
      </button>
      <button
        component={Routerlink}
        to="/register"
        variant="outlined"
        color="accent"
        sx={{
          height: 40,
          width: 165,
          borderRadius: 5,
          border: 2,
          "&:hover": {
            border: 2,
          },
          "&.active": {
            backgroundColor: "accent.main",
            color: "text.light",
            borderColor: "accent.main",
          },
        }}
      >
        Registration
      </button>
    </Box>
  );
}

export default AuthNavigation;
