import axios from "axios";
import {
  USER_EDUCATIONS_FAILED,
  USER_EDUCATIONS_REQUEST,
  USER_EDUCATIONS_SUCCESS,
  USER_JOB_POST_FAILED,
  USER_JOB_POST_REQUEST,
  USER_JOB_POST_SUCCESS,
  USER_PORTFOLIO_FAILED,
  USER_PORTFOLIO_REQUEST,
  USER_PORTFOLIO_SUCCESS,
  USER_PROFILE_FAILED,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROJECTS_REQUEST,
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

export const userProfileAction = (id) => async (dispatch) => {
  dispatch({
    type: USER_PROFILE_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/profile/me`,
      { id }
    );

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAILED,
      payload: error,
    });
  }
};

export const userEducations = (id) => async (dispatch) => {
  dispatch({
    type: USER_EDUCATIONS_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/allEdu`,
      { id }
    );

    dispatch({
      type: USER_EDUCATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_EDUCATIONS_FAILED,
      payload: error,
    });
  }
};

export const userPortfolio = (id) => async (dispatch) => {
  dispatch({
    type: USER_PORTFOLIO_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/allPort`,
      { id }
    );

    dispatch({
      type: USER_PORTFOLIO_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_PORTFOLIO_FAILED,
      payload: error,
    });
  }
};
