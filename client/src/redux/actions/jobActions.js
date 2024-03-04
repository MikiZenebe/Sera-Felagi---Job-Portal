import axios from "axios";
import { NEW_JOB_FAILED, NEW_JOB_REQUEST, NEW_JOB_SUCCESS } from "../types";

export const createNewJobAction =
  (user, interpretResponse) => async (dispatch) => {
    dispatch({
      type: NEW_JOB_REQUEST,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/job/addJob`,
        user
      );

      if (res.status === 200 || res.status === 200) {
        interpretResponse({
          message: "Job Posted Successfully",
          response: "success",
          res: res.data,
          responseCode: 200,
        });
      } else {
        interpretResponse({
          message: "Error Posting Job",
          response: "error",
          responseCode: 400,
        });
      }
      dispatch({
        type: NEW_JOB_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: NEW_JOB_FAILED,
        payload: error,
      });
    }
  };
