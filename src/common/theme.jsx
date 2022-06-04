import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      //   light: '#bfcbd0',
      //   main: '#b0bec5',
      //   dark: '#7b8589',
      //   contrastText: '#fff',
      light: '#e0e0e0',
      main: '#9e9e9e',
      dark: '#757575',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f54d7f',
      main: '#f32160',
      dark: '#aa1743',
      contrastText: '#fff',
    },
    common: {
      grey: '#9e9e9e',
      white: '#fff',
    },
  },
});

//TODO добавить цвета
