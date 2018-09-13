import {DECREMENT_LOADING, INCREMENT_LOADING, TEST_PUSH_DETAILS} from "../../actions/test";
import {pushTestAttemptAC} from "./TestAttempt-ActionCreators";
import {pushSectionDetailsAC} from "./Sections-ActionCreator";


function incrementLoadingAC() {
    return {type: INCREMENT_LOADING}

}

function decrementLoadingAC() {
    return {type: DECREMENT_LOADING}

}


function pushTestDetailsAC(testDetails) {
    return {type: TEST_PUSH_DETAILS, testDetails}

}


/**
 * Set up Test details, Section Details and the  Test Attempt
 * After that, decrement the loading count
 *
 * @param testDetails
 * @param sectionList
 * @param testAttempt
 * @returns {Function}
 */

function setUpTestAsyncAC(testDetails, sectionList, testAttempt) {


    return function (dispatch) {

        dispatch(pushTestDetailsAC(testDetails));
        dispatch(pushSectionDetailsAC(sectionList));
        dispatch(pushTestAttemptAC(testAttempt));

        dispatch(decrementLoadingAC());

    }

}

export {incrementLoadingAC, decrementLoadingAC, pushTestDetailsAC, setUpTestAsyncAC};