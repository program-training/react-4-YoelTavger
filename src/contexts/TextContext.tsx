import { createContext, useContext, useState } from 'react';

interface TextContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const TextContext = createContext<TextContextType | undefined>(undefined);

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useTextContext must be used within a TextContextProvider');
  }
  return context;
};

export const TextContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<string>('hello world');

  return (
    <TextContext.Provider value={{ state, setState }}>
      {children}
    </TextContext.Provider>
  );
};

