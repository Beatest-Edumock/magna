import axios from 'axios';


function LoginUserApi(email, password) {
    return axios.post('/user/login', {email, password});
}

function LogoutUserApi() {
    return axios.post('/user/logout');
}

function GetUserDetailsApi() {
    return axios.get('user');
}


function ResendActivationMailApi(email, recaptcha) {
    return axios.post('/user/resend_activation', {
        email,
        captcha_token: recaptcha
    });

}

export {LoginUserApi, LogoutUserApi, ResendActivationMailApi, GetUserDetailsApi};
