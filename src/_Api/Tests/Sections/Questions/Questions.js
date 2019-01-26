import {testFramAxios} from "../../Axios";
import axios from "axios";


function getQuestionDetailsAPI(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}`)
}

function getQuestionSolutionsAPI(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}/solutions`)
}

function runCodeAPI(code, language_id, inputs) {
    return axios.post('/coding/run', {code, language_id, inputs});
}

export {getQuestionDetailsAPI, getQuestionSolutionsAPI, runCodeAPI};