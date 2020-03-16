import { checkId } from '../../../routes/checker';

import * as actions from '../../actionTypes';
import axios from "axios";


export const saveAccountInfo = (accountInfo) => {
    return async dispatch => {
        try {
            const userId = checkId();
            const { data } = await axios.post(`/api/account-info`, {
                ...accountInfo, userId
            })
            dispatch({ type: actions.SAVE_ACCOUNT_INFO, payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}

export const updateAccountInfo = (accountInfo) => {
    return async dispatch => {
        try {
            const userId = checkId();
            const { data } = await axios.put(`/api/account-info`, {
                ...accountInfo, userId
            })
            dispatch({ type: actions.SAVE_ACCOUNT_INFO, payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}

export const getAccountInfo = () => {
    return async dispatch => {
        try {
            const userId = checkId();
            const { data } = await axios.get(`/api/account-info/${userId}`)
            dispatch({ type: actions.SAVE_ACCOUNT_INFO, payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}

