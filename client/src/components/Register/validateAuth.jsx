export default function validateAuth(values) {
    let errors = {};
    // Email Errors
    // if (!values.email) {
    //     errors.email = "Required Email";
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //     errors.email = "Invalid email address";
    // }
    // Password Errors
    if (!values.name) {
        errors.name = "Required Password";
    } else if (values.name.length < 6) {
        errors.name = "Password must be at least 6 characters";
    }
    if (!values.surname) {
        errors.surname = "Required Password";
    } else if (values.surname.length < 6) {
        errors.surname = "Password must be at least 6 characters";
    }

    return errors;
}
