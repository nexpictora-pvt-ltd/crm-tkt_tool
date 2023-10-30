import React, { useState } from 'react';
import './Setting.scss'

function Settings() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <div>
      <h2>Theme Settings</h2>
      <label>
        Dark Mode:
        <input type="checkbox" checked={isDarkMode} onChange={handleThemeChange} />
      </label>
    </div>
  );
}

export default Settings;