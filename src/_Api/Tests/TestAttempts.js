import {testFramAxios} from "./Axios";
import axios from "axios";


function geTestAttempt(testID) {
    return testFramAxios.get(`/tests/${testID}/attempts`)
}


function startTestAPI(testID) {
    return axios.post(`/tests/${testID}/attempts/start`)
}

function updateQuestionAttemptChoiceAPI(testID, sectionID, questionID, choiceID) {
    return testFramAxios.put(`/tests/${testID}/sections/${sectionID}/questions/${questionID}/attempts`,{
            "choice_id": choiceID
    })
}

export {startTestAPI, geTestAttempt, updateQuestionAttemptChoiceAPI}