import {
  ROOM_LIST_REQUESTE,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
} from "../constants/roomConstants";

export const roomListReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ROOM_LIST_REQUESTE:
      return {
        loading: true,
        rooms: [],
      };
    case ROOM_LIST_SUCCESS:
      return {
        loading: false,
        rooms: action.payload,
      };
    case ROOM_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
