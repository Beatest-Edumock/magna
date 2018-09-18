import {QUESTION_PUSH_DETAILS} from "../../actions/test";
import {GetQuestionDetailsAPI} from "../../../_Api/Tests/Sections/Questions/Questions";
import {QUESTION_UPDATE_CURRENT} from "../../actions/test";

/**
 * Do not call this action creator from any component.
 *
 * @param questionDetails
 * @returns {{type: string, questionDetails: *}}
 */
function pushQuestionDetailsAC(questionDetails) {
    return {type: QUESTION_PUSH_DETAILS, questionDetails}

}

/**
 *
 * Perform an api call to get question details (like html/choices, etc)
 * and dispatch pushQuestionDetails action.
 *
 *
 * @param questionID
 * @returns {Function}
 */
function fetchAndPushQuestionDetailsAsyncAC(questionID) {

    return (dispatch, getState) => {

        const state = getState();

        const test_id = state.test.id;

        const question = state.test.questionsByID[questionID];

        if (question === undefined) {
            return;
        }

        if (question.html) { // we use the 'html' attribute of the question to check if its loaded
            return;
        }

        const section_id = question.section_id;


        GetQuestionDetailsAPI(test_id, section_id, questionID).then(({data}) => {
            dispatch(pushQuestionDetailsAC(data));

        });

    }

}

/**
 *
 * @param questionID
 * @returns {{type: string, questionID: *}}
 */
function changeQuestionCurrentAC(questionID) {
    return {type: QUESTION_UPDATE_CURRENT, questionID: questionID}
}

/**
 * change and fetch the state of current question, and fetch previous and next question
 *
 * @param questionID
 * @param questionIndex
 * @returns {Function}
 */
function changeQuestionCurrentAsyncAC(questionID, questionIndex) {
    return (dispatch, getState) => {

        const state = getState();
        const currentSection = state.test.currentSection;
        const questionsList = state.test.sectionsByID[currentSection].questions;


        for (let i = 1; i <= 3; i++) {

            const previousQuestionID = questionsList[questionIndex - i];
            if (previousQuestionID !== undefined)
                dispatch(fetchAndPushQuestionDetailsAsyncAC(previousQuestionID));

            const nextQuestionID = questionsList[questionIndex + i];

            if (nextQuestionID !== undefined)
                dispatch(fetchAndPushQuestionDetailsAsyncAC(nextQuestionID));

        }


        // fetch current question
        dispatch(fetchAndPushQuestionDetailsAsyncAC(questionID));
        dispatch(changeQuestionCurrentAC(questionID));
    }
}

export {pushQuestionDetailsAC, fetchAndPushQuestionDetailsAsyncAC, changeQuestionCurrentAsyncAC};
