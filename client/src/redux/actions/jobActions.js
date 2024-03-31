import axios from "axios";

export const createNewJobAction =
  (user, interpretResponse) => async (dispatch) => {
    dispatch({
      type: "NEW_JOB_REQUEST",
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
        type: "NEW_JOB_SUCCESS",
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: "NEW_JOB_FAILED",
        payload: error,
      });
    }
  };

export const getAllJobAction =
  (type, data = null) =>
  async (dispatch) => {
    dispatch({
      type: "GET_JOBS_REQUEST",
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
        type: "GET_JOBS_SUCCESS",
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: "GET_JOBS_FAILED",
        payload: error,
      });
    }
  };

export const getJobByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "GET_JOB_BY_ID",
  });

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/getJob/${id}`
    );

    dispatch({
      type: "GET_JOB_BY_ID_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_JOB_BY_ID_FAILED",
      payload: error,
    });
  }
};

export const addSkillForJob = (post, interpretResponse) => async (dispatch) => {
  dispatch({
    type: "ADD_JOB_SKILL_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/job/reqSkill`,
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
      type: "ADD_JOB_SKILL_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_JOB_SKILL_FAILED",
      payload: error,
    });
  }
};

export const getJobSkillByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "GET_JOB_SKILL_BY_ID",
  });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/getReqSkill/${id}`
    );

    dispatch({
      type: "GET_JOB_SKILL_BY_ID_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_JOB_SKILL_BY_ID_FAILED",
      payload: error,
    });
  }
};

export const getAllUserByJobIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "USER_BY_JOB_ID_REQUEST",
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/job/userByjobId`,
      {
        id,
      }
    );

    dispatch({
      type: "USER_BY_JOB_ID_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_BY_JOB_ID_FAILED",
      payload: error,
    });
  }
};

export const applyForJobAction =
  (user, interpretResponse) => async (dispatch) => {
    dispatch({
      type: "USER_APPLY_JOB_REGISTER_REQUEST",
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/job/applyJob`,
        user
      );

      if (res.status === 200 || res.status === 200) {
        interpretResponse({
          message: "Job Applied Successfully",
          response: "success",
          res: res.data,
          responseCode: 200,
        });
      } else {
        interpretResponse({
          message: "Error While Job Applied",
          response: "error",
          responseCode: 400,
        });
      }

      dispatch({
        type: "USER_APPLY_JOB_REGISTER_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "USER_APPLY_JOB_REGISTER_FAILED",
        payload: error,
      });
    }
  };
