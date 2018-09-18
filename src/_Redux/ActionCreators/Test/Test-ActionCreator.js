import {DECREMENT_LOADING, INCREMENT_LOADING, TEST_PUSH_DETAILS} from "../../actions/test";
import {pushTestAttemptAC} from "./TestAttempt-ActionCreators";
import {pushSectionDetailsAC} from "./Sections-ActionCreator";
import {fetchAndPushQuestionDetailsAsyncAC} from "./Questions-ActionCreator";


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
 * Set up Test details, Section Details and the  Test Attempt.
 *
 * The current question (that is set by pushTestAttempt)
 * is loaded.
 *
 * After that, decrement the loading count
 *
 * @param testDetails
 * @param sectionList
 * @param testAttempt
 * @returns {Function}
 */

function setUpTestAsyncAC(testDetails, sectionList, testAttempt) {


    return function (dispatch,getState) {

        dispatch(pushTestDetailsAC(testDetails));
        dispatch(pushSectionDetailsAC(sectionList));
        dispatch(pushTestAttemptAC(testAttempt));

        const state = getState();

        dispatch(fetchAndPushQuestionDetailsAsyncAC(state.test.currentQuestion.toString()));

        dispatch(decrementLoadingAC());

    }

}

export {incrementLoadingAC, decrementLoadingAC, pushTestDetailsAC, setUpTestAsyncAC};