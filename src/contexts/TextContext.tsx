import React, { createContext, useState } from "react";

interface TextData {
  text: string;
}

interface TextContextType {
  text: TextData;
  setText: React.Dispatch<React.SetStateAction<TextData>>;
}

interface TextContextProviderProps {
  children: React.ReactNode;
}

export const TextContext = createContext<TextContextType | null>(null);

const TextContextProvider: React.FC<TextContextProviderProps> = (props) => {
  const [text, setText] = useState<TextData>({ text: "Hello World" });

  return (
    <TextContext.Provider value={{ text, setText }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextContextProvider;
