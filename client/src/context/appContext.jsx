import { createContext, useContext, useState, useReducer } from "react";
import reducer from "./reducer";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  // LOGIN_USER_BEGIN,
  // LOGIN_USER_ERROR,
  // LOGIN_USER_SUCCESS,
  // REGISTER_USER_BEGIN,
  // REGISTER_USER_ERROR,
  // REGISTER_USER_SUCCESS,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
} from "./action";
import axios from "axios";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  userLocation: localStorage.getItem("location") || "",
  jobLocation: localStorage.getItem("location") || "",
};

const addUserToLS = ({ token, user, location }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("location", location);
};
const RemoveUserFromLS = ({ token, user, location }) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("location");
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(clearAlert, 3000);
  };
  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  const setupUser = async (currentUser, actionType) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const response = await axios.post(
        `http://localhost:8888/api/v1/auth/${actionType}`,
        currentUser
      );
      console.log(response.data);
      const { user, token, location } = response.data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
          msg: actionType === "login" ? "Login successfull" : "User created",
        },
      });
      addUserToLS({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    setTimeout(clearAlert, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, setupUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
