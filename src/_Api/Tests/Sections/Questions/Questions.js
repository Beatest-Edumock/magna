import {testFramAxios} from "../../Axios";


function getQuestionDetailsAPI(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}`)
}

function getQuestionSolutionsAPI(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}/solutions`)
}
export {getQuestionDetailsAPI,getQuestionSolutionsAPI}