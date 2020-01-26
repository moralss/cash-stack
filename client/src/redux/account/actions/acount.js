import { checkId } from '../../../routes/checker';

import * as actions from '../../actionTypes';
import axios from "axios";


export const saveAccountInfo = (data) => {
    return async dispatch => {
        try {
            const userId = checkId();
            console.log({ ...data, userId })
            await axios.post(`/api/account-info`, {
                ...data, userId
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const updateAccountInfo = (data) => {
    return async dispatch => {
        try {
            const userId = checkId();
            console.log({ ...data, userId })
            await axios.put(`/api/account-info`, {
                ...data, userId
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const getAccountInfo = () => {
    return async dispatch => {
        try {
            const userId = checkId();
            console.log("call me meeeeeeeeeeee")
            const { data } = await axios.get(`/api/account-info/${userId}`)
            dispatch({ type: actions.SAVE_ACCOUNT_INFO, payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}

