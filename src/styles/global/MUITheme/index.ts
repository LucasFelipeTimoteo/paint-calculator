import { createTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 500,
      md: 830,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    h1: {
      fontSize: '3.5rem',
      whiteSpace: 'nowrap'
    },

    h2: {
      fontSize: '1.5rem',
      marginLeft: 1
    }
  },

  palette: {
    primary: {
      main: "#402aff"
    },

    secondary: {
      main: "#0066FF"
    }
  }
})

export const MUITheme = responsiveFontSizes(theme)