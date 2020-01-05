import axios from "axios";
import * as actions from '../../actionTypes/index'
import store from "../../../store";
import { checkId } from '../../../routes/checker';
const URL = "/api";

export const updateRole = (role, userId) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${URL}/role`, { role, userId });

            if (data.user_role === null) {
                return dispatch({ type: actions.SET_ROLE, payload: false })
            }
            return dispatch({ type: actions.SET_ROLE, payload: true })
        } catch (e) {
            console.log(e)
        }
    }
};


export const getRole = (userId) => {
    var query = `?_userId=${userId}`
    return async dispatch => {
        try {
            const { data } = await axios.get(`${URL}/role` + query);
            if (data.user_role === null) {
                return dispatch({ type: actions.SET_ROLE, payload: false })
            }
            return dispatch({ type: actions.SET_ROLE, payload: true })
        } catch (e) {
            console.log(e)
        }
    }
};


