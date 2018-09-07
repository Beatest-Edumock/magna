import {testFramAxios} from "./Axios";
import axios from "axios";


function GeTestAttempt(testID) {
    return testFramAxios.get(`/tests/${testID}/attempts`)
}


function StartTestAPI(testID) {
    return axios.post(`/tests/${testID}/attempts/start`)
}

export {StartTestAPI, GeTestAttempt}