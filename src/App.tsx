import React from 'react';
import Grandpa from './components/textContext/Grandpa';
import ThemeSwitcher from './components/textContext/themeComponents/ThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './components/textContext/themeComponents/ThemedComponent';
import { UserProvider } from './contexts/UserContext';
import Header from './components/textContext/userContext/Header';
import Main from './components/textContext/userContext/Main';

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
    <ThemeProvider>
      <UserProvider>
        <div>
          <Header />
          <Main />
        </div>
      </UserProvider>
    </ThemeProvider>
    </div>
  );
};

export default App;