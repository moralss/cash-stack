import history from "../routes/history";
import * as actions from '../actionTypes/index'



export const logout = () => {
  history.push('/');
  localStorage.clear("user")
  return {
    type: actions.AUTHENTICATED,
    payload: {
      auth: false
    }
  };
}

export const setModelType = () => {
  return {
    type: actions.SET_MODEL_TYPE,
    payload: {
      type: false
    }
  };
}


export const setProfile = (decodeToken) => {
  return {
    type: actions.SET_USER,
    payload: {
      profile: {
        id: decodeToken.sub,
        name: decodeToken.name,
        email: decodeToken.email
      }
    }
  }
}