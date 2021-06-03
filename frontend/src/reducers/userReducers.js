import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUESTE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUESTE:
      return {
        loading: true,
        user: {},
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        success: false,
        user: {},
      };
    default:
      return state;
  }
};
