import {
  ROOM_LIST_REQUESTE,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAILS_REQUESTE,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
} from "../constants/roomConstants";

import roomData from "../rooms";

export const listRooms = () => async (dispatch) => {
  try {
    dispatch({ type: ROOM_LIST_REQUESTE });
    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: roomData,
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
  const room = roomData.find((room) => room.id === parseInt(roomID));
  // console.log(typeof roomID);
  try {
    dispatch({ type: ROOM_DETAILS_REQUESTE });
    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: room,
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
