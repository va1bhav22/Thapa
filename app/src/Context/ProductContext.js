// create a context
// Provider
// consumer => useContext Hook
import { createContext, useContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};

// costum Hook Create

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
