import {QUESTION_PUSH_DETAILS} from "../../actions/test";
import {GetQuestionDetailsAPI} from "../../../_Api/Tests/Sections/Questions/Questions";


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

        const question = state.test.questions[questionID];

        if (question.html) { // we use the 'html' attribute of the question to check if its loaded
            return;
        }

        const section_id = question.section_id;


        GetQuestionDetailsAPI(test_id, section_id, questionID).then(({data}) => {
            dispatch(pushQuestionDetailsAC(data));

        });

    }

}

export {pushQuestionDetailsAC, fetchAndPushQuestionDetailsAsyncAC};
