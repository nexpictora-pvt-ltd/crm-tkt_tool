import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF', // Set text color to white
    },
  },
  // Add other theme options as needed
});

export default darkTheme;
