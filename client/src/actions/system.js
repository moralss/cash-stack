import history from "../routes/history";
import * as actions from '../redux/actionTypes/index'

export const logout = () => {
  return async dispatch => {
    localStorage.clear("persist:root")
    history.push('/');
    localStorage.clear("user")
    localStorage.clear("persist:root")
    localStorage.clear("")

    dispatch({
      type: actions.AUTHENTICATED,
      payload: {
        auth: true
      }
    });
    dispatch({
      type: actions.REST_STATE,
    })

  }
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