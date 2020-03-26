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
            const { data } = await axios.post(`${URL}/receipt`, {
                receiptUrl,
                userId
            }, setAxiosHeader())
            console.log("data.messagedata.message", data)
            if (data.message === "success") {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "WAITING", stage: 1 }

                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const getRugbyStage = (userId) => {
    return async dispatch => {
        try {
            const userId = checkId();
            const { data } = await axios.get(`${URL}/rugby-stage/${userId}`);
            console.log("show me this dddddd", data)
            if (data.status) {
                dispatch({
                    type: actions.SAVE_PRODECTED_RUBY_STAGE,
                    payload: { prodectedStage: data.rubyStage - 1 }
                });
                return
            }

            dispatch({
                type: actions.SAVE_PRODECTED_RUBY_STAGE,
                payload: { prodectedStage: data.rubyStage }
            });

        } catch (e) {
            console.log(e);
        }
    }
}


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
            console.log("show pres", data.active, data.stage)
            // console.log("show pres", data)
            if (data.active == false && data.stage == 1) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "WAITING", stage: 0 }

                });
                // return
            }



            if (data.length == 0) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "FIRST_TIME", stage: 0 }

                });
                // return
            }



            if (data.active == true) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: {
                        approvalType: "ACCESS",
                        stage: data.stage,
                    }
                });
                // return
            }

            if (data.active == false && data.stage > 1) {
                dispatch({
                    type: actions.CHANGE_APPROVAL,
                    payload: { approvalType: "ACCESS", stage: data.stage - 1 }
                });
                // return
            }




        } catch (e) {
            console.log(e);
        }
    }
}