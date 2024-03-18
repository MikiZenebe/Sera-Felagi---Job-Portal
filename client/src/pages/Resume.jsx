import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  userEducations,
  userPortfolio,
  userProfileAction,
} from "../redux/actions/userAction";

export default function Cv() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(userProfileAction(id));
      dispatch(userEducations(id));
      dispatch(userPortfolio(id));
    }
  }, [dispatch, id]);

  return <div>Cv</div>;
}
