import axios from 'axios';


function loginUserApi(email, password) {
    return axios.post('/user/login', {email, password});
}

function logoutUserApi() {
    return axios.post('/user/logout');
}

function getUserDetailsApi() {
    return axios.get('user');
}

function forgotPasswordAPI(email, recaptcha) {
    return axios.post('/user/forgot_password', {
        email,
        captcha_token: recaptcha
    });
}

function resetPasswordAPI(resetToken, new_password) {
    return axios.post(`/user/reset_password/${resetToken}`, {
        new_password,
    });
}

function resendActivationMailApi(email, recaptcha) {
    return axios.post('/user/resend_activation', {
        email,
        captcha_token: recaptcha
    });

}

function signupAPI(full_name, email, password, phone_no, college_id, graduation_date, degree, branch, captcha_token) {

    return axios.post('/user/signup', {
        full_name,
        email,
        password,
        phone_no,
        college_id,
        graduation_date,
        degree,
        branch,
        captcha_token
    });

}

export {loginUserApi, signupAPI, logoutUserApi, resendActivationMailApi, getUserDetailsApi, forgotPasswordAPI, resetPasswordAPI};
