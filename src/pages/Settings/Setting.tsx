import React from 'react';
import { useThemeContext } from './themeContext';
import './Setting.scss';

function Settings() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div>
      <h2>Theme Settings</h2>
      <label>
        Dark Mode:
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      </label>
    </div>
  );
}

export default Settings;
