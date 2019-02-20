import {testFramAxios} from "../../Axios";
import axios from "axios";
import {rexAxios} from "../../Axios-Rex";


function updateQuestionAttemptScoreAPI(testID, sectionID, questID, newScore) {
    return rexAxios.put(`/test/attempts/${testID}/sections/${sectionID}/questions/${questID}/score`,
        {score: newScore}
    )
}


export {updateQuestionAttemptScoreAPI};