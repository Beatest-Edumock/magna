import {testFramAxios} from "../../Axios";


function getQuestionDetailsAPI(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}`)
}

export {getQuestionDetailsAPI}