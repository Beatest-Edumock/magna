import axios from 'axios';


function setUpApp() {
    axios.defaults.baseURL = '/api/v0.1/';

}

export {setUpApp};


