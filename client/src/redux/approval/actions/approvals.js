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

export const saveRefs = (pioneerRefs, userId) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${URL}/members`, { pioneerRefs, userId });
        } catch (e) {
            console.log(e)
        }
    }
};


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

export const getRugbyStage = (userId) => {
    return async dispatch => {
        try {
            const userId = checkId();
            console.log("userID", userId)
            const { data } = await axios.get(`${URL}/rugby-stage/${userId}`
            );
            dispatch({
                type: actions.SAVE_PRODECTED_RUBY_STAGE,
                payload: { prodectedStage: data.rubyStage }
            });

            console.log(data)

        } catch (e) {
            console.log(e);
        }
    }
}


// send-confirmation


export const sendConfirmation = (email) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${URL}/send-confirmation/`, { email }, setAxiosHeader())
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
                    payload: { approvalType: "ACCESS", stage: data.stage }
                });
            }

            if (data.active == false && data.stage > 1) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "ACCESS", stage: data.stage - 1 }
                });
            }


            if (data.active == false && data.stage == 1) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "WAITING", stage: 0 }

                });
            }
            if (data.length == 0) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "FIRST_TIME", stage: 0 }

                });
            }

        } catch (e) {
            console.log(e);
        }
    }
}