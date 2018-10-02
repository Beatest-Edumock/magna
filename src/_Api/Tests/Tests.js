// Author @ kyawkn
//

import axios from 'axios';
import {geTestAttempt} from "./TestAttempts";
import {getSectionsAPI} from "./Sections/Sections";

function getTestGroupAPI(testID) {
    return axios.all(
        [getTestDetailsAPI(testID), getSectionsAPI(testID), geTestAttempt(testID)]
    )
}

function getTestDetailsAPI(testID) {
    return axios.get('/tests/' + testID);
}

function getTestsListAPI(testType) {
    return axios.get('/tests?type=' + testType);
}

export {getTestDetailsAPI, getTestGroupAPI,getTestsListAPI}