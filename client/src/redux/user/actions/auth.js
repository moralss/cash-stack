import axios from "axios";
import {
  reset
} from "redux-form";

import history from "../../../routes/history";
import * as actions from '../../actionTypes/index'
import jwtDecode from "jwt-decode";
const URL = "/api";


export const registerUser = (credentials) => {
  return async dispatch => {
    try {
      dispatch({ type: actions.UI_TOGGLE_LOADDING, payload: true });
      const res = await axios.post(`${URL}/signin`, credentials);
      const decodedToken = jwtDecode(res.data.token);
      dispatch({
        type: actions.SET_USER,
        payload: {
          profile: {
            id: decodedToken.sub,
            name: decodedToken.name,
            email: decodedToken.email,
            refNumber: decodedToken.refNumber
          }
        }
      });
      dispatch({ type: actions.UI_TOGGLE_LOADDING, payload: false });
      localStorage.setItem("user", res.data.token);
      dispatch({
        type: actions.AUTHENTICATED,
        payload: {
          auth: true
        }
      });
      dispatch(reset('form1'))
      dispatch(reset('login'))
      dispatch(reset('form2'))
      dispatch(reset('object Object'))
      history.push("/account")
    } catch (error) {
      dispatch({ type: actions.UI_TOGGLE_LOADDING, payload: false });
      console.log(error);
    }
  };
};


export const login = (credentials) => {
  return async dispatch => {
    try {
      dispatch({ type: actions.UI_TOGGLE_LOADDING, payload: true });
      const res = await axios.post(`${URL}/login`, credentials);
      const decodedToken = jwtDecode(res.data.token);
      console.log(decodedToken);
      dispatch({
        type: actions.SET_USER,
        payload: {
          profile: {
            id: decodedToken.sub,
            name: decodedToken.name,
            email: decodedToken.email,
            refNumber: decodedToken.refNumber,
            createdAt: decodedToken.createdAt
          }
        }
      });
      dispatch({ type: actions.UI_TOGGLE_LOADDING, payload: false });
      localStorage.setItem("user", res.data.token);
      dispatch({
        type: actions.AUTHENTICATED,
        payload: {
          auth: true
        }
      });
      dispatch(reset('login'))
      dispatch(reset('form1'))
      dispatch(reset('form2'))
      dispatch(reset('object Object'))
      return
    } catch (e) {
      const data = !e.response ? null : e.response.data.error;
      dispatch({
        type: actions.AUTH_ERROR,
        payload: {
          error: data
        }
      });
      dispatch({ type: actions.UI_TOGGLE_LOADDING, payload: false });
      return
    }
  };
}

export const changePassword = (newPassword, userId) => {
  return async dispatch => {
    try {
      const res = await axios.put(`${URL}/change-password`, { newPassword, userId });
      dispatch({
        type: actions.PASSWORD_CHANGED,
      });

      return
    } catch (e) {
      dispatch({
        type: actions.AUTH_ERROR,
      });
      return
    }
  }
}

export const recoverPassword = (email) => {
  return async dispatch => {
    try {

      var query = `?_email=${email}`
      const { data } = await axios.get(`${URL}/password-recovery/` + query);
      console.log(data);
      dispatch({
        type: actions.CHANGE_PAGE_PASSWORD,
        payload: data.userId
      });

      history.push(`/recoverpassword`)

      return
    } catch (e) {
      dispatch({
        type: actions.AUTH_ERROR,
      });
      return
    }
  }
}