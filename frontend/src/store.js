import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import {
  roomCreateReducer,
  roomDeleteReducer,
  roomDetailsReducer,
  roomListReducer,
  roomUpdateReducer,
} from "./reducers/roomReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  updateUserProfileReducer,
} from "./reducers/userReducers";

const rootReducer = combineReducers({
  roomList: roomListReducer,
  roomDetails: roomDetailsReducer,
  roomCreate: roomCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  updateUserProfile: updateUserProfileReducer,
  roomDelete: roomDeleteReducer,
  roomUpdate: roomUpdateReducer,
});

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userLogin: { user: userFromStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
