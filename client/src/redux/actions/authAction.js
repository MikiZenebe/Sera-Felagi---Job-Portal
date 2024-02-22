import axios from "axios";
import {
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../types";

export const registerUser = (user, interpretResponse) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      user
    );

    console.log(res, "response from backend is");
    console.log("status code: ", res);
    if (res.status === 200 || res.status === 200) {
      interpretResponse({
        message: "Registered Successfully",
        response: "success",
        res: res.data,
        responseCode: 200,
      });
    } else {
      interpretResponse({
        message: "Error Registering User",
        response: "error",
        responseCode: 400,
      });
    }

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });

    //Save to the local storage
    localStorage.setItem("currentUser", JSON.stringify(res.data));
  } catch (error) {
    interpretResponse({
      message: error.res?.data.message,
      response: "error",
      responseCode: error.code,
    });
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
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILED",
      payload: error,
    });
  }
};
