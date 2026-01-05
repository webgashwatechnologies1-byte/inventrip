import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({});

  const openPopup = (data = {}) => {
    if (data) setInitialData(data);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setInitialData({});
  };

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup, initialData }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
