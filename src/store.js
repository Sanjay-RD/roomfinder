import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import { roomDetailsReducer, roomListReducer } from "./reducers/roomReducers";
import { userLoginReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  roomList: roomListReducer,
  roomDetails: roomDetailsReducer,
  userLogin: userLoginReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
