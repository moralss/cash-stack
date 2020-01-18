import React, { useState } from "react";
import useFormValidation from './useFormValidation';
import { useSelector, useDispatch } from "react-redux"
import validateAuth from './validateAuth';
import { changePage } from '../../redux/system/action/pages';


const INITIAL_STATE = {
    country: ""
};

const Step2 = (props) => {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth);
    const user = useSelector(state =>
        (
            {
                page: state.system
            }
        )
    );
    const dispatch = useDispatch()


    return (
        <div class="container">
            <form onSubmit={e => handleSubmit(e)}>
                <h1>Step 2</h1>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                    className={errors.name && "error-input"}
                    autoComplete="off"
                    placeholder="Your name"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
                <button disabled={isSubmitting} type="submit">
                    Next
                </button>
                <button onClick={() => dispatch(changePage(user.page.page - 1))} type="submit">
                    Back
                </button>

            </form>
        </div >
    );
}


export default Step2;
