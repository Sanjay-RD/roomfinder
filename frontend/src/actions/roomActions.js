import axios from "axios";
import {
  ROOM_LIST_REQUESTE,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAILS_REQUESTE,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
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
