import axios from "axios";
import * as actions from '../actionTypes/index'
import store from "../store";
const URL = "";


export const setAxiosHeader = () => {
  let token = localStorage.getItem("authorization");
  const headers = {
    headers: {
      authorization: token
    }
  };
  return headers;
};


export const getMembers = (id) => {
  return async dispatch => {
    try {
      console.log("in action ", id)

      var query = `?_userId=${id}`
      const res = await axios.get(`${URL}/AllMembers` + query,
        setAxiosHeader());

      dispatch({
        type: actions.SAVE_MEMBERS,
        payload: {
          allMembers: res.data.members
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};