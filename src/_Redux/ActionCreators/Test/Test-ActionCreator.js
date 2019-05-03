import {
    DECREMENT_LOADING,
    INCREMENT_LOADING,
    QUESTION_UPDATE_SCORE,
    TEST_DISABLE_INPUTS,
    TEST_ENABLE_INPUTS,
    TEST_PUSH_DETAILS,
    TEST_PUSH_ERROR,
    TEST_SET_REVIEW
} from "../../actions/test";
import {pushTestAttemptAC} from "./TestAttempt-ActionCreators";
import {_pushSectionDetailsAC, changeCurrentSectionAsyncAC} from "./Sections/Sections-ActionCreator";
import {updateQuestionAttemptAPI} from "../../../_Api/Tests/TestAttempts";
import {updateQuestionAttemptScoreAPI} from "../../../_Api/Tests/Sections/Questions/QuestionAttempts";


function incrementLoadingAC() {
    return {type: INCREMENT_LOADING}

}

function decrementLoadingAC() {
    return {type: DECREMENT_LOADING}

}


function _pushTestDetailsAC(testDetails) {
    return {type: TEST_PUSH_DETAILS, testDetails}

}

function pushErrorAC(text, isFatal) {

    return {type: TEST_PUSH_ERROR, errorDetails: {text, isFatal}}

}


let questionVisitTimeStampObj = {};

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


    return function (dispatch, getState) {

        dispatch(_pushTestDetailsAC(testDetails));
        dispatch(_pushSectionDetailsAC(sectionList));
        dispatch(pushTestAttemptAC(testAttempt));

        const state = getState();
        questionVisitTimeStampObj = {time: new Date(), initial: true};

        // current question key will be set by pushTestAttempt
        // we just 'change' to that again so that the next N are fetched
        dispatch(changeCurrentSectionAsyncAC(state.test.currentSection));
        // dispatch(changeCurrentQuestionAsyncAC(state.test.currentQuestion));


        dispatch(decrementLoadingAC());


    }

}

function enableInputsAC() {
    return {type: TEST_ENABLE_INPUTS}

}

function disableInputsAC() {
    return {type: TEST_DISABLE_INPUTS}

}

function updateCurrentQuestionScoreAsyncAC(newScore) {

    return function (dispatch, getState) {

        const state = getState();

        const questionID = state.test.currentQuestion;
        const sectionID = state.test.sectionsByID[state.test.currentSection].section_attempt_id;
        const testID = state.test.test_attempt_id;

        updateQuestionAttemptScoreAPI(testID, sectionID, questionID, newScore).then(() => {
            dispatch({type: QUESTION_UPDATE_SCORE, questionID, newScore});
        });

    };

}

function setReiviewModeAC(superAdmin) {
    return {
        type: TEST_SET_REVIEW, superAdmin
    }

}

export {
    incrementLoadingAC, decrementLoadingAC, _pushTestDetailsAC, setUpTestAsyncAC, pushErrorAC, enableInputsAC, disableInputsAC,
    updateCurrentQuestionScoreAsyncAC, setReiviewModeAC, questionVisitTimeStampObj
};