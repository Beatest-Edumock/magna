import {testFramAxios} from "./Axios";
import {rexAxios} from "./Axios-Rex";

let asUserID = (new URL(document.location)).searchParams.get("asUser");

function geTestAttempt(testID) {
    return testFramAxios.get(`/tests/${testID}/attempts`)
}

function getTestAttemptReportAPI(testID) {
    return rexAxios.get(`/tests/${testID}/user/${asUserID}`)
}

function getTestAttemptPsychReportAPI(testID) {
    return rexAxios.get(`/tests/${testID}/user/${asUserID}/psych`)
}

function startTestAPI(testID) {
    return testFramAxios.post(`/tests/${testID}/attempts/start`)
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

    return testFramAxios.put(`/tests/${testID}/sections/${sectionID}/questions/${questionID}/attempts`, change)
}


function pingAPI(testID, sectionID, questionID) {

    return testFramAxios.post(`/tests/${testID}/sections/${sectionID}/questions/${questionID}/attempts/ping`)
}

function finishTestAPI(testID) {
    return testFramAxios.post(`/tests/${testID}/attempts/finish`)
}

function getPerformanceAPI(testID) {
    return testFramAxios.get(`/tests/${testID}/attempts/performance`)
}


function logTabChangeAPI(testID) {
    return testFramAxios.post(`/tests/${testID}/attempts/focus`)

}

export {startTestAPI, geTestAttempt, updateQuestionAttemptAPI, pingAPI, finishTestAPI, getPerformanceAPI, getTestAttemptReportAPI, logTabChangeAPI, getTestAttemptPsychReportAPI}