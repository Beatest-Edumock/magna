import {testFramAxios} from "./Axios";
import axios from "axios";


function geTestAttempt(testID) {
    return testFramAxios.get(`/tests/${testID}/attempts`)
}


function startTestAPI(testID) {
    return axios.post(`/tests/${testID}/attempts/start`)
}

/**
 *
 * @param testID
 * @param sectionID
 * @param questionID
 * @param change an object tto update the question attempt
 * @returns {AxiosPromise<any> | IDBRequest | Promise<void>}
 */
function updateQuestionAttemptAPI(testID, sectionID, questionID, change) {

    Object.keys(change).map((key) => {

        if (change[key] == null) {
            change[key] = "--None--" //FIXME BACKEND BUG Read docs!!!!!
        }

    });

    return testFramAxios.put(`/tests/${testID}/sections/${sectionID}/questions/${questionID}/attempts`, change)
}


function pingAPI(testID, sectionID, questionID) {

    return testFramAxios.post(`/tests/${testID}/sections/${sectionID}/questions/${questionID}/attempts/ping`)
}

export {startTestAPI, geTestAttempt, updateQuestionAttemptAPI, pingAPI}