import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUESTE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

import users from "../users";
console.log(users);

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUESTE });
    {
      users.map((user) => {
        if (user.email === email && user.password === password) {
          const userInfo = users.find((userInfo) => userInfo.id === user.id);
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userInfo,
          });
        }
      });
    }
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

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
