import {
  USER_JOB_POST_FAILED,
  USER_JOB_POST_REQUEST,
  USER_JOB_POST_SUCCESS,
} from "../types";

export const getAlljobPostofUser = (id) => async (dispatch) => {
  dispatch({
    type: USER_JOB_POST_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/job/myJobPost`,
      { id }
    );

    dispatch({
      type: USER_JOB_POST_SUCCESS,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: USER_JOB_POST_FAILED,
      payload: error,
    });
  }
};
