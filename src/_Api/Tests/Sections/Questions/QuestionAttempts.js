import {testFramAxios} from "../../Axios";
import axios from "axios";
import {rexAxios} from "../../Axios-Rex";


function updateQuestionAttemptScoreAPI(testID, sectionID, questID, newScore) {
    return rexAxios.put(`/test/attempts/${testID}/sections/${sectionID}/questions/${questID}/score`,
        {score: newScore}
    )
}


/**
 *
 * @param testID
 * @param sectionID
 * @param questionID
 * @param time
 * @returns {AxiosPromise<any> | IDBRequest | Promise<void>}
 */
function updateQuestionAttemptTimeAPI(testID, sectionID, questionID, time) {

    return testFramAxios.put(`/tests/${testID}/sections/${sectionID}/questions/${questionID}/attempts/time`, {time})
}

export {updateQuestionAttemptScoreAPI, updateQuestionAttemptTimeAPI};