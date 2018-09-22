import axios from 'axios';


function contactUsApi(name, email, message, recaptcha) {
    return axios.post('/misc/contact_us', {
        name,
        email,
        message,
        captcha_token: recaptcha
    });
}

export {contactUsApi}
