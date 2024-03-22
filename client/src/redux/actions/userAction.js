import axios from "axios";

export const getAlljobPostofUser = (id) => async (dispatch) => {
  dispatch({
    type: "USER_JOB_POST_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/job/myJobPost`,
      { id }
    );

    dispatch({
      type: "USER_JOB_POST_SUCCESS",
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: "USER_JOB_POST_FAILED",
      payload: error,
    });
  }
};

export const userProfileAction = (id) => async (dispatch) => {
  dispatch({
    type: "USER_PROFILE_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/profile/me`,
      { id }
    );

    dispatch({
      type: "USER_PROFILE_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_PROFILE_FAILED",
      payload: error,
    });
  }
};

export const userEducations = (id) => async (dispatch) => {
  dispatch({
    type: "USER_EDUCATIONS_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/allEdu`,
      { id }
    );

    dispatch({
      type: "USER_EDUCATIONS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_EDUCATIONS_FAILED",
      payload: error,
    });
  }
};

export const addEducation = (post, interpretResponse) => async (dispatch) => {
  dispatch({
    type: "ADD_EDUCATION_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/addEdu`,
      post
    );

    if (res.status === 200 || res.status === 200) {
      interpretResponse({
        message: "Education Added Successfully",
        response: "success",
        res: res.data,
        responseCode: 200,
      });
    } else {
      interpretResponse({
        message: "Error While Adding Education",
        response: "error",
        responseCode: 400,
      });
    }

    console.log(res);
    dispatch({
      type: "ADD_EDUCATION_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_EDUCATION_FAILED",
      payload: error,
    });
  }
};

export const userPortfolio = (id) => async (dispatch) => {
  dispatch({
    type: "USER_PORTFOLIO_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/allPort`,
      { id }
    );

    dispatch({
      type: "USER_PORTFOLIO_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_PORTFOLIO_FAILED",
      payload: error,
    });
  }
};

export const addPortfolio = (post, interpretResponse) => async (dispatch) => {
  dispatch({
    type: "ADD_PORTFOLIO_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/addPort`,
      post
    );

    if (res.status === 200 || res.status === 200) {
      interpretResponse({
        message: "Portfolio Added Successfully",
        response: "success",
        res: res.data,
        responseCode: 200,
      });
    } else {
      interpretResponse({
        message: "Error While Adding Portfolio",
        response: "error",
        responseCode: 400,
      });
    }

    dispatch({
      type: "ADD_PORTFOLIO_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_PORTFOLIO_FAILED",
      payload: error,
    });
  }
};

export const userSkills = (id) => async (dispatch) => {
  dispatch({
    type: "USER_SKILLS_REQUEST",
  });

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/applicant/allSkills`,
      { id }
    );

    dispatch({
      type: "USER_SKILLS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_SKILLS_FAILED",
      payload: error,
    });
  }
};

export const addASkill = (post, interpretResponse) => async (dispatch) => {
  dispatch({
    type: "ADD_SKILL_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/addSkills`,
      post
    );

    if (res.status === 200 || res.status === 200) {
      interpretResponse({
        message: "Skill Added Successfully",
        response: "success",
        res: res.data,
        responseCode: 200,
      });
    } else {
      interpretResponse({
        message: "Error While Adding Skill",
        response: "error",
        responseCode: 400,
      });
    }

    dispatch({
      type: "ADD_SKILL_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_SKILL_FAILED",
      payload: error,
    });
  }
};

export const updateASkill = (post) => async (dispatch) => {
  dispatch({
    type: "UPDATE_SKILL_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/updateSkills`,
      post
    );

    const id = post.uId;
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/allUserSkill`,
      { id }
    );

    dispatch({
      type: "UPDATE_SKILL_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_SKILL_FAILED",
      payload: error,
    });
  }
};

export const deleteASkill = (post, interpretResponse) => async (dispatch) => {
  dispatch({
    type: "DELETE_SKILL_REQUEST",
  });

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/applicant/deleteSkills`,
      post
    );

    if (res.status === 200 || res.status === 200) {
      interpretResponse({
        message: "Skill Deleted Successfully",
        response: "success",
        res: res.data,
        responseCode: 200,
      });
    } else {
      interpretResponse({
        message: "Error While Deleting Skill",
        response: "error",
        responseCode: 400,
      });
    }

    const id = post.uId;
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/applicant/allUserSkill`,
      { id }
    );

    dispatch({
      type: "USER_SKILLS_SUCCESS",
      payload: response.data,
    });

    //     dispatch({
    //        type:'UPDATE_SKILL_SUCCESS',
    //        payload:response.data
    //    })
  } catch (error) {
    dispatch({
      type: "UPDATE_SKILL_FAILED",
      payload: error,
    });
  }
};
