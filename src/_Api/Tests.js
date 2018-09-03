// Author @ kyawkn
//
//
import axios from 'axios';

function GetTestWithIDAPI(testID) {

    return axios.get('/tests/' + testID);


}

export {GetTestWithIDAPI}