import {
  ROOM_LIST_REQUESTE,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
} from "../constants/roomConstants";

import roomData from "./rooms";

export const listRooms = () => async (dispatch) => {
  try {
    dispatch({ type: ROOM_LIST_REQUESTE });
    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: roomData,
    });
  } catch (error) {
    dispatch({
      type: ROOM_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
