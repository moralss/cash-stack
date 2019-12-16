import axios from "axios";
import {
  reset
} from "redux-form";

import history from "../routes/history";
import * as actions from '../actionTypes/index'
import jwtDecode from "jwt-decode";
const URL = "/api";


export const registerUser = (credentials) => {
  return async dispatch => {
    try {
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
      history.push("/active")
    } catch (error) {
      console.log(error);
    }
  };
};


export const login = (credentials) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, credentials);
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
      history.push("/dashboard")
      return
    } catch (e) {
      const data = !e.response ? null : e.response.data.error;
      dispatch({
        type: actions.AUTH_ERROR,
        payload: {
          error: data
        }
      });
      return
    }
  };
};