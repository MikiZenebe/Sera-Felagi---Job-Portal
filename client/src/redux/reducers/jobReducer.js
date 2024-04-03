export const newJobReducer = (state = { newJob: [] }, action) => {
  switch (action.type) {
    case "NEW_JOB_REQUEST":
      return { ...state, loading: false };
    case "NEW_JOB_SUCCESS":
      return {
        newJob: action.payload,
        loading: false,
      };
    case "NEW_JOB_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getAllJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case "GET_JOBS_REQUEST":
      return { ...state, loading: false };
    case "GET_JOBS_SUCCESS":
      return {
        jobs: action.payload,
        loading: false,
      };
    case "GET_JOBS_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getUserAllJobPostReducer = (state = { jobsPost: [] }, action) => {
  switch (action.type) {
    case "USER_JOB_POST_REQUEST":
      return { ...state, loading: true };
    case "USER_JOB_POST_SUCCESS":
      return {
        jobsPost: action.payload,
        loading: false,
      };
    case "USER_JOB_POST_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobByIdReducer = (state = { job: [] }, action) => {
  switch (action.type) {
    case "GET_JOB_BY_ID":
      return { ...state, loading: true };
    case "GET_JOB_BY_ID_SUCCESS":
      return {
        job: action.payload,
        loading: false,
      };
    case "GET_JOB_BY_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const newJobSkillReducer = (state = { newSkill: [] }, action) => {
  switch (action.type) {
    case "ADD_JOB_SKILL_REQUEST":
      return { ...state, loading: false };
    case "ADD_JOB_SKILL_SUCCESS":
      return {
        newSkill: action.payload,
        loading: false,
      };
    case "ADD_JOB_SKILL_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobSkillByIdReducer = (state = { jobskill: [] }, action) => {
  switch (action.type) {
    case "GET_JOB_SKILL_BY_ID":
      return { ...state, loading: true };
    case "GET_JOB_SKILL_BY_ID_SUCCESS":
      return {
        jobskill: action.payload,
        loading: false,
      };
    case "GET_JOB_SKILL_BY_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getUserbyjobIdReducer = (state = { appliList: [] }, action) => {
  switch (action.type) {
    case "USER_BY_JOB_ID_REQUEST":
      return { ...state, loading: true };
    case "USER_BY_JOB_ID_SUCCESS":
      return {
        appliList: action.payload,
        loading: false,
      };
    case "USER_BY_JOB_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobAppliByUserIdReducer = (state = { myJob: [] }, action) => {
  switch (action.type) {
    case "USER_JOB_BY_USER_ID_REQUEST":
      return { ...state, loading: true };
    case "USER_JOB_BY_USER_ID_SUCCESS":
      return {
        myJob: action.payload,
        loading: false,
      };
    case "USER_JOB_BY_USER_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
