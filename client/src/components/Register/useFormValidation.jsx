import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { changePage } from '../../redux/system/action/pages';

function useFormValidation(initialState, validate) {
    const user = useSelector(state =>
        (
            {
                page: state.system
            }
        )
    );

    const dispatch = useDispatch()
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log("show show ", user.page)
                dispatch(changePage(user.page.page + 1))
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
    }, [errors]);

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    function handleBlur() {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    }

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    };
}

export default useFormValidation;
