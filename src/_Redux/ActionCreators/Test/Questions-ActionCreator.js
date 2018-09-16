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

/**
 * @TODO fetch before and after?
 * @param questionID
 * @returns {Function}
 */
function changeCurrentQuestion(questionID) {
    return(dispatch, getState) =>  {

        const state = getState();

        // if the question is not null then
        // TODO how to check question details?
        if(state.test.questionsByID[questionID] == null) {
            dispatch(fetchAndPushQuestionDetailsAsyncAC(questionID))
        }
        dispatch({type: QUESTION_UPDATE_CURRENT, questionID: questionID})
    }
}

export {pushQuestionDetailsAC, fetchAndPushQuestionDetailsAsyncAC, changeCurrentQuestion};
