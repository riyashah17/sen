const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
 
    data.name = !isEmpty(data.name) ? data.name: '';
    data.handle = !isEmpty(data.handle) ? data.handle: '';

    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password2 = !isEmpty(data.password2) ? data.password2: '';


    if (!Validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = "Name must be between 2 to 30 chars";
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is Required";
    }
    if(Validator.isEmpty(data.handle)) {
        errors.handle = "Handle field is Required";
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is Required";
    }

    if(Validator.isEmpty(data.handle)) {
        errors.email = "Email field is Required";
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is Invalid";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "password field is Required";
    }
    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be between 6 to 30 chars";
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is Required";
    }
    if (!Validator.isLength(data.password2, {min: 6, max: 30})) {
        errors.password2 = "Password 2 must be between 6 to 30 chars";
    }

    if (!Validator.equals(data.password2, data.password)) {
        errors.password2 = "Passwords must match.";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}
