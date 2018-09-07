// Author @ kyawkn
//
//
import axios from 'axios';

function GetTestWithIDAPI(testID) {
    return axios.get('/tests/' + testID);
}


function StartTestAPI(testID) {
    return axios.post(`/tests/${testID}/attempts/start`)
}

export {GetTestWithIDAPI, StartTestAPI}