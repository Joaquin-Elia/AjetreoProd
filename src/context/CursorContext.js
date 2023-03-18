import { useState, createContext } from 'react';

export const CursorContext = createContext({
  cursorType: 'default',
  setCursorType: () => {}
});

const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');
  const handleCursorChange = (type) => {
    setCursorType(type);
  };

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType: handleCursorChange }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;