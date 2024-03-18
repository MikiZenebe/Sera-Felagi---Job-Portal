export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_PROFILE_REQUEST":
      return { loading: true };

    case "USER_PROFILE_SUCCESS":
      return { loading: false, cUser: action.payload };

    case "USER_PROFILE_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
