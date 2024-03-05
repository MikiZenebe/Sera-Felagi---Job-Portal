import axios from "axios";
import {
  GET_JOBS_FAILED,
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  NEW_JOB_FAILED,
  NEW_JOB_REQUEST,
  NEW_JOB_SUCCESS,
} from "../types";

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

export const getAllJobAction =
  (type, data = null) =>
  async (dispatch) => {
    dispatch({
      type: GET_JOBS_REQUEST,
    });

    try {
      var response;

      if (type === "All") {
        const allData = await axios.get(
          `${process.env.REACT_APP_API_URL}/job/getAllJob`
        );
        response = allData.data;
      }
      if (type === "Salary") {
        const filterSalary = await axios.get(
          `${process.env.REACT_APP_API_URL}/job/getAllJob`
        );
        const salaryData = filterSalary.data.filter(
          (item) => item.salary >= data
        );
        response = salaryData;
      }
      if (type === "Location") {
        const filterLocation = await axios.get(
          `${process.env.REACT_APP_API_URL}/job/getAllJob`
        );
        const locationData = filterLocation.data.filter(
          (item) => item.location.toLowerCase() === data.toLowerCase()
        );
        response = locationData;
      }

      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: GET_JOBS_FAILED,
        payload: error,
      });
    }
  };
