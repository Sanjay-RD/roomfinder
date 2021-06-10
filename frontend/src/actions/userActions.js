import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUESTE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUESTE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUESTE });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "/api/user/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const register =
  (firstName, lastName, userName, email, phone, password) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUESTE });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        "/api/user",
        { firstName, lastName, userName, email, phone, password },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: USER_LOGOUT });
};
