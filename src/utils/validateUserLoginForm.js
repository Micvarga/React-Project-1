export const validateUserLoginForm = (values) => {
    const errors = {};

    if (values.username.length < 6) {
        errors.username = 'Username must be at least 6 characters minimum.'
    }
    if (values.username.length > 15) {
        errors.username = 'Username cannot excced 15 characters.'
    }
    if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters minimum.'
    }

    return errors;
};