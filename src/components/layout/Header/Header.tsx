import { Button } from "../../common/Button";
import * as React from 'react';

const Header = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`flex justify-between items-center p-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      
      <div> <span></span> <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Event⚡️Spark</span></div>
      <div>
        <ul className={`text-xl flex gap-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <li>Home</li>
          <a href="/contact">
            <li>Contact</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
        </ul>
      </div>
      <div className={`flex gap-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Button variant="outline" onClick={toggleDarkMode} className={`bg-transparent border-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>

        <a href="/login">
          <Button variant="outline" className={`bg-transparent border-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Login
          </Button>
        </a>

        <a href="/register">
          <Button variant="outline" className={`bg-transparent border-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Register
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;