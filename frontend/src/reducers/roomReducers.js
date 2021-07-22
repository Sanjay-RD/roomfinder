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
  ROOM_UPDATE_RESET,
  USER_ROOM_REQUESTE,
  USER_ROOM_SUCCESS,
  USER_ROOM_FAIL,
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

export const roomDetailsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ROOM_DETAILS_REQUESTE:
      return {
        loading: true,
        room: {},
      };
    case ROOM_DETAILS_SUCCESS:
      return {
        loading: false,
        room: action.payload,
      };
    case ROOM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const roomCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_CREATE_REQUESTE:
      return {
        loading: true,
      };
    case ROOM_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        room: action.payload,
      };
    case ROOM_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ROOM_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const roomDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_DELETE_REQUESTE:
      return {
        loading: true,
      };
    case ROOM_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ROOM_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const roomUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_UPDATE_REQUESTE:
      return {
        loading: true,
      };
    case ROOM_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        room: action.payload,
      };
    case ROOM_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ROOM_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case USER_ROOM_REQUESTE:
      return {
        loading: true,
      };
    case USER_ROOM_SUCCESS:
      return {
        loading: false,
        rooms: action.payload,
      };
    case USER_ROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
