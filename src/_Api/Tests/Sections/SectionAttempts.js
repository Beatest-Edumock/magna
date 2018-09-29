import {testFramAxios} from "../Axios";


function submitSectionAPI(testID, sectionID) {
    return testFramAxios.post(`/tests/${testID}/sections/${sectionID}/attempts/finish`);
}

export {submitSectionAPI}
