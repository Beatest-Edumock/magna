import {testFramAxios} from "../Axios";


function GetSections(testID) {
    return testFramAxios.get(`/tests/${testID}/sections`);
}

export {GetSections}