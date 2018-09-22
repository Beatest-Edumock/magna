import {testFramAxios} from "../Axios";


function getSections(testID) {
    return testFramAxios.get(`/tests/${testID}/sections`);
}

export {getSections}