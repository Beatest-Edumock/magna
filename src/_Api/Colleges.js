import axios from 'axios';


function GetCollegeApi() {
    return axios.get('/colleges');
}

export {GetCollegeApi}
