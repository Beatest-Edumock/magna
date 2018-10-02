import {testFramAxios} from "../Axios";


function getSectionsAPI(testID) {
    return testFramAxios.get(`/tests/${testID}/sections`);
}

export {getSectionsAPI}