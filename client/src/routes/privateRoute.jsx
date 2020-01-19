import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { store } from "../store";
import { AUTHENTICATED, SET_USER } from "../redux/actionTypes";
import jwtDecode from "jwt-decode";
import { setProfile } from "../actions/system";

const token = localStorage.getItem("user");

const authenticatedUser = () => {
    let decodedToken;
    if (token) {
        decodedToken = jwtDecode(token);
        let currentDate = Date.now() / 1000;
        console.log("token", decodedToken.lat > currentDate);
        if (decodedToken.lat > currentDate) {
            store.dispatch({
                type: AUTHENTICATED,
                payload: {
                    auth: true
                }
            });
            store.dispatch({
                type: SET_USER,
                payload: {
                    profile: {
                        id: decodedToken.sub,
                        name: decodedToken.name,
                        email: decodedToken.email,
                        refNumber: decodedToken.refNumber,
                        createdAt: decodedToken.createdAt
                    }
                }
            });
            return;
        }
    }

    if (!token) {
        store.dispatch({
            type: AUTHENTICATED,
            payload: {
                auth: false
            }
        });
        return;
    }
};

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    authenticatedUser();
    return (
        <Route {...rest}
            component={
                props => store.getState().user.auth ? (
                    <Component {...rest} {...props} />
                ) : (
                        <Redirect to="/" />
                    )
            } />
    );
};
