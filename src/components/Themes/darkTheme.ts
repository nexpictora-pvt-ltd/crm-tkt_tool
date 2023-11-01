import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: '#D36A2F',
    },
    background: {
      default: '#1d1d1d', // Set the background color to black
    },
    text: {
      primary: '#FFFFFF', // Set text color to white
    },
  },
  // Add other theme options as needed
});

export default darkTheme;
