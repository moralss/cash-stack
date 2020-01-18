import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import Step1 from './Step1';
import Step2 from './Step2';

const Register = () => {
    const user = useSelector(state =>
        (
            {
                authenticated: state.user.auth,
                userId: state.user.profile.id,
                profile: state.user.profile,
                approvalType: state.approval.approvalType,
                page: state.system.page
            }
        )
    );

    const dispatch = useDispatch()

    const renderPage = () => {
        if (user.page === 1) {
            return (
                <div>
                    <Step1 />
                </div>
            );
        }

        if (user.page === 2) {
            return (
                <div>
                    <Step2 />
                </div>
            );
        }
    }

    return (
        <div class="container">
            <h3>Register</h3>
            {renderPage()}
        </div>
    );
}


export default Register;
