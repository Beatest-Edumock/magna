import {DECREMENT_LOADING, INCREMENT_LOADING, SECTION_PUSH_DETAILS, TEST_PUSH_DETAILS} from "../../actions/test";


function incrementLoadingAC() {
    return {type: INCREMENT_LOADING}

}

function decrementLoadingAC() {
    return {type: DECREMENT_LOADING}

}


function pushTestDetailsAC(testDetails) {
    return {type: TEST_PUSH_DETAILS, testDetails}

}

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

export {incrementLoadingAC, decrementLoadingAC, pushTestDetailsAC, pushSectionDetailsAC};