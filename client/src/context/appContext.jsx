import { createContext, useContext, useState, useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./action";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(clearAlert, 3000)
  };
  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
