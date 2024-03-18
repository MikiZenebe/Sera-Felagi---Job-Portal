import {
  ADD_EDUCATION_FAILED,
  ADD_EDUCATION_SUCCESS,
  ADD_PORTFOLIO_FAILED,
  ADD_PORTFOLIO_SUCCESS,
  ADD_SKILL_FAILED,
  ADD_SKILL_SUCCESS,
  GET_USERS_ADDRESS_FAILED,
  GET_USERS_ADDRESS_REQUEST,
  GET_USERS_ADDRESS_SUCCESS,
  UPDATE_SKILL_SUCCESS,
  USER_EDUCATIONS_FAILED,
  USER_EDUCATIONS_REQUEST,
  USER_EDUCATIONS_SUCCESS,
  USER_PORTFOLIO_FAILED,
  USER_PORTFOLIO_REQUEST,
  USER_PORTFOLIO_SUCCESS,
  USER_PROFILE_FAILED,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_SKILLS_FAILED,
  USER_SKILLS_REQUEST,
  USER_SKILLS_SUCCESS,
} from "../types";

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      return { loading: false, userPro: action.payload };

    case USER_PROFILE_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userEduReducer = (state = { userEduc: [] }, action) => {
  switch (action.type) {
    case USER_EDUCATIONS_REQUEST:
      return {
        loading: true,
      };
    case USER_EDUCATIONS_SUCCESS:
      return { loading: false, success: true, userEduc: action.payload };
    case ADD_EDUCATION_SUCCESS:
      return {
        loading: false,
        success: true,
        userEduc: [...state.userEduc, action.payload],
      };
    case USER_EDUCATIONS_FAILED:
    case ADD_EDUCATION_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userPortfolioReducer = (state = { portfolios: [] }, action) => {
  switch (action.type) {
    case USER_PORTFOLIO_REQUEST:
      return {
        loading: true,
      };
    case USER_PORTFOLIO_SUCCESS:
      return { loading: false, success: true, projects: action.payload };
    case ADD_PORTFOLIO_SUCCESS:
      return {
        loading: false,
        success: true,
        projects: [...state.portfolios, action.payload],
      };
    case USER_PORTFOLIO_FAILED:
    case ADD_PORTFOLIO_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userAddressReducer = (state = { address: [] }, action) => {
  switch (action.type) {
    case GET_USERS_ADDRESS_REQUEST:
      return {
        loading: true,
      };
    case GET_USERS_ADDRESS_SUCCESS:
      return { loading: false, success: true, address: action.payload };

    case GET_USERS_ADDRESS_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userSkillReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case USER_SKILLS_REQUEST:
      return {
        loading: true,
      };
    case USER_SKILLS_SUCCESS:
    case UPDATE_SKILL_SUCCESS:
      return { loading: false, success: true, skills: action.payload };
    case ADD_SKILL_SUCCESS:
      return {
        skills: [...state.skills, action.payload],
        loading: false,
      };
    case USER_SKILLS_FAILED:
    case ADD_SKILL_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
