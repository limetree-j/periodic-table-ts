import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
  clickedItem: any;
  setClickedItem: React.Dispatch<React.SetStateAction<any>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [clickedItem, setClickedItem] = useState<any | null>(null);

  return (
    <DataContext.Provider value={{ clickedItem, setClickedItem }}>
      {children}
    </DataContext.Provider>
  );
};