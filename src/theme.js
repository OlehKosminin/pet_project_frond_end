import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Manrope, Inter',
      },
      breakpoints: {
        values: {
          mobile: 320,
          tablet: 768,
          desktop: 1280,
        },}
})

export default theme