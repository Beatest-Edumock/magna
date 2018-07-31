import axios from 'axios';


function LoginUser(email, password) {
    return axios.post('/user/login', {email, password});
}


export default LoginUser