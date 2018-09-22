import axios from 'axios';


function getCollegeApi() {
    return axios.get('/colleges');
}

export {getCollegeApi}
