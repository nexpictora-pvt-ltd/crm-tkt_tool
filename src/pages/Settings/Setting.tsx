/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './Setting.scss';
import { Grid, Typography } from '@mui/material';
import { useTheme } from './themeContext';




const Settings: React.FC = (props) => {
  const { toggleTheme, currentTheme } = useTheme();

  return (
    <Grid container>

      <Grid item>
        {/* <Typography variant='h2'> Change Theme: </Typography> */}
        <input
          type="checkbox"
          id="darkmode-toggle"
          className="toggleInput"
          onChange={toggleTheme}
        />
        <label htmlFor="darkmode-toggle" className="toggleLabel"></label>
      </Grid>
    </Grid>
  );
};

export default Settings;




