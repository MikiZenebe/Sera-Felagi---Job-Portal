import axios from "axios";
import {
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../types";

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      user
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: "USER_LOGIN_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      user
    );

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: res.data,
    });
    localStorage.setItem("loggedIn", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILED",
      payload: error,
    });
  }
};
