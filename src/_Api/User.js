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

export {loginUserApi, logoutUserApi, resendActivationMailApi, getUserDetailsApi};
