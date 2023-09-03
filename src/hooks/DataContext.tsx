import React, { createContext, useContext, useState, ReactNode } from "react";

import ElementModel from "../models/ElementModel";

interface DataContextProps {
  clickedItem: ElementModel | null;
  setClickedItem: React.Dispatch<React.SetStateAction<ElementModel | null>>;
  quizResult: [boolean, number];
  setQuizResult: React.Dispatch<React.SetStateAction<[boolean, number]>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [clickedItem, setClickedItem] = useState<ElementModel | null>(null);
  const [quizResult, setQuizResult] = useState<[boolean, number]>([false, 0]);

  return (
    <DataContext.Provider
      value={{ clickedItem, setClickedItem, quizResult, setQuizResult }}
    >
      {children}
    </DataContext.Provider>
  );
};
