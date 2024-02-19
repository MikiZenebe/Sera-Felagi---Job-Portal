import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../types";

const initialState = {
  registered_user: {},
  logged_in_user: localStorage.getItem("loggedIn")
    ? JSON.parse(localStorage.getItem("loggedIn"))
    : null,
  loading: false,
};

export const registerState = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        registered_user: action.payload,
        loading: false,
        success: true,
      };

    case USER_REGISTER_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        logged_in_user: action.payload,
        loading: false,
        success: true,
      };

    case USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
