import { combineReducers } from "redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer, registerState } from "./reducers/authReducer";
import {
  getAllJobReducer,
  getJobByIdReducer,
  getJobSkillByIdReducer,
  getUserbyjobIdReducer,
} from "./reducers/jobReducer";

const rootReducer = combineReducers({
  loginReducer,
  registerState,
  getAllJobReducer,
  getJobByIdReducer,
  getJobSkillByIdReducer,
  getUserbyjobIdReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = { userLoginReducer: { currentUser } };
const composedEnhancers = composeWithDevTools({});

const store = legacy_createStore(
  rootReducer,
  initialState,
  composedEnhancers(applyMiddleware(thunk))
);

export default store;
