import {
  GET_JOBS_FAILED,
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_JOB_BY_ID,
  GET_JOB_BY_ID_FAILED,
  GET_JOB_BY_ID_SUCCESS,
  NEW_JOB_FAILED,
  NEW_JOB_REQUEST,
  NEW_JOB_SUCCESS,
  USER_JOB_POST_FAILED,
  USER_JOB_POST_REQUEST,
  USER_JOB_POST_SUCCESS,
} from "../types";

export const newJobReducer = (state = { newJob: [] }, action) => {
  switch (action.type) {
    case NEW_JOB_REQUEST:
      return { ...state, loading: false };
    case NEW_JOB_SUCCESS:
      return {
        newJob: action.payload,
        loading: false,
      };
    case NEW_JOB_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getAllJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case GET_JOBS_REQUEST:
      return { ...state, loading: false };
    case GET_JOBS_SUCCESS:
      return {
        jobs: action.payload,
        loading: false,
      };
    case GET_JOBS_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getUserAllJobPostReducer = (state = { jobsPost: [] }, action) => {
  switch (action.type) {
    case USER_JOB_POST_REQUEST:
      return { ...state, loading: true };
    case USER_JOB_POST_SUCCESS:
      return {
        jobsPost: action.payload,
        loading: false,
      };
    case USER_JOB_POST_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobByIdReducer = (state = { job: [] }, action) => {
  switch (action.type) {
    case GET_JOB_BY_ID:
      return { ...state, loading: true };
    case GET_JOB_BY_ID_SUCCESS:
      return {
        job: action.payload,
        loading: false,
      };
    case GET_JOB_BY_ID_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};