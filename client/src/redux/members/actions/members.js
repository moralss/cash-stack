import axios from "axios";
import * as actions from '../../actionTypes'
import store from "../../../store";
import { checkId } from '../../../routes/checker';

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
};


export const setNextMembers = (data) => {
    return async dispatch => {

        dispatch({
            type: actions.SAVE_NEXT_MEMEBERS,
            payload: {
                ...data
            }
        })

    };
}
