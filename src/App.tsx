import React from 'react';
import Grandpa from './components/textContext/Grandpa';
import ThemeSwitcher from './components/textContext/themeComponents/ThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './components/textContext/themeComponents/ThemedComponent';

const App: React.FC = () => {
  return (
    <div>
      <Grandpa />
      <ThemeProvider>
      <div>
        <h1>Themed App</h1>
        <ThemeSwitcher />
        <ThemedComponent />
      </div>
    </ThemeProvider>
    </div>
  );
};

export default App;