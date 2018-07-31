import axios from 'axios';


function LoginUser(email, password) {
    return axios.post('/user/login', {email, password});
}

function LogoutUser() {
    return axios.post('/user/logout');
}

export {LoginUser, LogoutUser};
