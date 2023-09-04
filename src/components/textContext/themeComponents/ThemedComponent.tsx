import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const ThemedComponent: React.FC = () => {
  const { theme } = useTheme();

  const styles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };

  return (
    <div style={styles}>
      <h2>Themed Component</h2>
      <p>This component uses the theme.</p>
    </div>
  );
};

export default ThemedComponent;
