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
 * change and fetch the state of current question, and fetch previous and next question
 * @param questionID
 * @returns {Function}
 */
function changeQuestionCurrentAC(questionID, questionIndex) {
    return(dispatch, getState) =>  {

        const state = getState();
        const currentSection = state.test.currentSection;
        const questionsList = state.test.sectionsByID[currentSection].questions;
        // fetch previous question
        if(questionIndex > 1) {
            const previousQuestionID = questionsList [questionIndex - 2];
            dispatch(fetchAndPushQuestionDetailsAsyncAC(previousQuestionID));
        }
        // fetch next question
        if(questionIndex < questionsList.length - 1) {
            const nextQuestionID = questionsList[questionIndex];
            dispatch(fetchAndPushQuestionDetailsAsyncAC(nextQuestionID));
        }

        // fetch current question
        dispatch(fetchAndPushQuestionDetailsAsyncAC(questionID));
        dispatch({type: QUESTION_UPDATE_CURRENT, questionID: questionID})
    }
}

export {pushQuestionDetailsAC, fetchAndPushQuestionDetailsAsyncAC, changeQuestionCurrentAC};
