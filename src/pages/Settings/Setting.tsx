import React from 'react';
import './Setting.scss';



const Settings: React.FC = (props) => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <input type="checkbox" id="darkmode-toggle" />
      <label htmlFor="darkmode-toggle">
          
      </label>
      <div className="background" />
    </div>
  );
};

export default Settings;


