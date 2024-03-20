import axios from "axios";

export const registerUser = (user, interpretResponse) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
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
      type: "USER_REGISTER_SUCCESS",
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
      type: "USER_REGISTER_FAILED",
      payload: error,
    });
  }
};

export const loginUser = (user, interpretResponse) => async (dispatch) => {
  dispatch({
    type: "USER_LOGIN_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      user
    );

    console.log(res.data.user, "response from backend is");
    console.log("status code: ", res);
    if (res.status === 200 || res.status === 200) {
      interpretResponse({
        message: "Logged in Successfully",
        response: "success",
        res: res.data.user,
        responseCode: 200,
      });
    } else {
      interpretResponse({
        message: "Error  During Login",
        response: "error",
        responseCode: res.status,
      });
    }

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: res.data.user,
    });
    //Save to the local storage
    localStorage.setItem("currentUser", JSON.stringify(res.data.user));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILED",
      payload: res.status,
    });
    interpretResponse({
      message: "Error  During Login",
      response: "error",
      responseCode: 400,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("currentUser");
};
