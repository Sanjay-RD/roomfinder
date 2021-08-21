import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUESTE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUESTE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LIST_REQUESTE,
  USER_LIST_SUCCESS,
  USER_LIST_RESET,
  USER_LIST_FAIL,
  USER_UPDATE_REQUESTE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
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
  (firstName, lastName, userName, email, phone, profileImg, password) =>
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
        { firstName, lastName, userName, email, phone, profileImg, password },
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

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUESTE });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const res = await axios.get("/api/user", config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateUserProfile = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUESTE });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const res = await axios.put("/api/user/profile", userData, config);
    console.log(res);

    dispatch({
      type: USER_UPDATE_SUCCESS,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_UPDATE_FAIL,
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
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_UPDATE_RESET });
};
