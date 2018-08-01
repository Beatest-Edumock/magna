import axios from 'axios';


function LoginUser(email, password) {
    return axios.post('/user/login', {email, password});
}

function LogoutUser() {
    return axios.post('/user/logout');
}

function GetUserDetails() {
    return axios.get('/user');
}


function ResendActivationMail(email, recaptcha) {
    return axios.post('/user/resend_activation', {
        email,
        captcha_token: recaptcha
    });

}

export {LoginUser, LogoutUser, ResendActivationMail,GetUserDetails};
