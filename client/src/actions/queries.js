import axios from "axios";
import * as actions from '../actionTypes/index'
import store from "../store";
import { checkId } from '../routes/checker';
const URL = "/api";


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
}
  ;

export const saveReceiptUrl = (receiptUrl, userId) => {
  return async dispatch => {
    try {
      const userId = checkId();
      await axios.post(`${URL}/receipt`, {
        receiptUrl,
        userId
      }, setAxiosHeader())
    } catch (e) {
      console.log(e);
    }
  }
}

// send-confirmation


export const sendConfirmation = (email) => {
  console.log("details ", email);
  return async dispatch => {
    try {
      const { data } = await axios.post(`${URL}/send-confirmation/`, { email }, setAxiosHeader())
      console.log(" request status", data);
    } catch (e) {
      console.log(e)
    }
  }
}

export const getApprovalType = (userId) => {
  return async dispatch => {
    try {
      const userId = checkId();
      const { data } = await axios.get(`${URL}/receipt/${userId}`, setAxiosHeader())
      if (data.active == true) {
        dispatch({
          type: actions.CHANGE_APPROVAL,
          payload: "ACCESS"
        });
      }
      if (data.active == false) {
        dispatch({
          type: actions.CHANGE_APPROVAL,
          payload: "WAITING"
        });
      }
      if (data.length == 0) {
        dispatch({
          type: actions.CHANGE_APPROVAL,
          payload: "FIRST_TIME"
        });
      }

      dispatch();
    } catch (e) {
      console.log(e);
    }
  }
}