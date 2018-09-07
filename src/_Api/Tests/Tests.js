// Author @ kyawkn
//

import axios from 'axios';
import {GeTestAttempt} from "./TestAttempts";
import {GetSections} from "./Sections/Sections";

function GetTestGroupAPI(testID) {
    return axios.all(
        [GetTestDetailsAPI(testID), GetSections(testID), GeTestAttempt(testID)]
    )
}

function GetTestDetailsAPI(testID) {
    return axios.get('/tests/' + testID);
}


export {GetTestDetailsAPI, GetTestGroupAPI}