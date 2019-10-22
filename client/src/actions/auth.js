import axios from "axios";
import history from "../routes/history";
import * as actions from '../actionTypes/index'
import jwtDecode from "jwt-decode";
const URL = "";


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
      history.push("/dashboard")
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
      console.log("decodeToken", decodedToken)
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