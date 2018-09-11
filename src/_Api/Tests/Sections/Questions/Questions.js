import {testFramAxios} from "../../Axios";


function GetQuestionDetailsAPI(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}`)
}

export {GetQuestionDetailsAPI}