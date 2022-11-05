import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "./DataReducer";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, {
    jobs: [],
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export function useDataContex() {
  return useContext(DataContext);
}
