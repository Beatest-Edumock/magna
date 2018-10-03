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


function resendActivationMailApi(email, recaptcha) {
    return axios.post('/user/resend_activation', {
        email,
        captcha_token: recaptcha
    });

}

function signupAPI(full_name, email, password, phone_no, college_id, captcha_token) {

    return axios.post('/user/signup', {
        full_name,
        email,
        password,
        phone_no,
        college_id,
        captcha_token
    });

}

export {loginUserApi, signupAPI, logoutUserApi, resendActivationMailApi, getUserDetailsApi};
