import {testFramAxios} from "../../Axios";


function GetQuestion(testID, sectionID, questID) {
    return testFramAxios.get(`tests/${testID}/sections/${sectionID}/questions/${questID}`)
}

export {GetQuestion}