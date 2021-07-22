import axios from "axios";
import {
  ROOM_LIST_REQUESTE,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAILS_REQUESTE,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  ROOM_CREATE_REQUESTE,
  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_FAIL,
  ROOM_CREATE_RESET,
  ROOM_DELETE_REQUESTE,
  ROOM_DELETE_SUCCESS,
  ROOM_DELETE_FAIL,
  ROOM_UPDATE_REQUESTE,
  ROOM_UPDATE_SUCCESS,
  ROOM_UPDATE_FAIL,
  USER_ROOM_FAIL,
  USER_ROOM_REQUESTE,
  USER_ROOM_SUCCESS,
} from "../constants/roomConstants";

export const listRooms = () => async (dispatch) => {
  try {
    dispatch({ type: ROOM_LIST_REQUESTE });

    const res = await axios.get("/api/rooms");

    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const roomDetails = (roomID) => async (dispatch) => {
  try {
    dispatch({ type: ROOM_DETAILS_REQUESTE });

    const res = await axios.get(`/api/rooms/${roomID}`);

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createRoom = (room) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROOM_CREATE_REQUESTE });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const res = await axios.post("/api/rooms", room, config);

    dispatch({
      type: ROOM_CREATE_SUCCESS,
      payload: res.data,
    });
    setTimeout(() => {
      dispatch({
        type: ROOM_CREATE_RESET,
      });
    }, 3000);
  } catch (err) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteRoom = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ROOM_DELETE_REQUESTE,
    });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios.delete(`/api/rooms/${id}`, config);

    dispatch({
      type: ROOM_DELETE_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ROOM_DELETE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const roomUpdate = (room, id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ROOM_UPDATE_REQUESTE,
    });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const res = await axios.put(`/api/rooms/${id}`, room, config);

    dispatch({
      type: ROOM_UPDATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_UPDATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getUserRoom = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ROOM_REQUESTE });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const res = await axios.get("/api/rooms/userRooms", config);

    dispatch({
      type: USER_ROOM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ROOM_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
