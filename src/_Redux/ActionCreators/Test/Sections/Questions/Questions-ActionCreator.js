import {QUESTION_PUSH_DETAILS, QUESTION_PUSH_SOLUTIONS, QUESTION_UPDATE_CURRENT} from "../../../../actions/test";
import {getQuestionDetailsAPI, getQuestionSolutionsAPI} from "../../../../../_Api/Tests/Sections/Questions/Questions";
import {setCurrentQuestionToSeenAsyncAC} from "./QuestionAttempt-ActionCreator";

/**
 * Do not call this action creator from any component.
 *
 * @param questionDetails
 * @returns {{type: string, questionDetails: *}}
 */
function _pushQuestionDetailsAC(questionDetails) {
    return {type: QUESTION_PUSH_DETAILS, questionDetails}

}


function _pushQuestionSolutionsAC(solutions) {
    return {type: QUESTION_PUSH_SOLUTIONS, solutions}

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
function _fetchAndPushQuestionDetailsAsyncAC(questionID) {

    return (dispatch, getState) => {

        const state = getState();

        const test_id = state.test.id;

        const question = state.test.questionsByID[questionID];

        if (question === undefined) {
            return;
        }

        if (question.html) { // we use the 'html' attribute of the question to check if its loaded

            if (state.test.is_complete) {
                if (question.tita_answer === undefined)
                    dispatch(_pushQuestionSolutionsAsyncAC(questionID));
            }
            return;
        }

        const section_id = question.section_id;


        getQuestionDetailsAPI(test_id, section_id, questionID).then(({data}) => {
            dispatch(_pushQuestionDetailsAC(data));

            if (state.test.is_complete) {
                if (question.tita_answer === undefined)
                    dispatch(_pushQuestionSolutionsAsyncAC(questionID));
            }

        });

    }

}

/**
 * !!!! ONLY CALL THIS FROM INSIDE changeCurrentQuestionAsyncAC !!!!
 *
 * @param questionID
 * @returns {{type: string, questionID: *}}
 */
function _changeCurrentQuestionAC(questionID) {
    return {type: QUESTION_UPDATE_CURRENT, questionID: questionID}
}

/**
 * change and fetch the state of current question, and fetch previous and next question
 *
 * @param questionID
 * @returns {Function}
 */
function changeCurrentQuestionAsyncAC(questionID) {
    return (dispatch, getState) => {

        const state = getState();
        const currentSection = state.test.currentSection;
        const questionsList = state.test.sectionsByID[currentSection].questions;

        const questionIndex = questionsList.indexOf(questionID);


        // fetch the next three
        for (let i = 1; i <= 3; i++) {

            const previousQuestionID = questionsList[questionIndex - i];
            if (previousQuestionID !== undefined)
                dispatch(_fetchAndPushQuestionDetailsAsyncAC(previousQuestionID));

            const nextQuestionID = questionsList[questionIndex + i];

            if (nextQuestionID !== undefined)
                dispatch(_fetchAndPushQuestionDetailsAsyncAC(nextQuestionID));

        }


        // fetch current question
        dispatch(_fetchAndPushQuestionDetailsAsyncAC(questionID));
        dispatch(_changeCurrentQuestionAC(questionID));
        dispatch(setCurrentQuestionToSeenAsyncAC(true));
    }
}


function moveToNextQuestionAsyncAC() {

    return (dispatch, getState) => {

        const state = getState();
        const currentQuestionID = state.test.currentQuestion;
        const currentSectionID = state.test.currentSection;

        const questions = state.test.sectionsByID[currentSectionID].questions;

        const questionIdx = questions.indexOf(currentQuestionID);


        if (questionIdx < questions.length - 1) {
            const nextIdx = questionIdx + 1;
            const nextQuestionIdx = questions[nextIdx];

            dispatch(changeCurrentQuestionAsyncAC(nextQuestionIdx));
        }

    }

}


function _pushQuestionSolutionsAsyncAC(questionID) {

    return (dispatch, getState) => {

        const state = getState();

        const testID = state.test.id;

        const question = state.test.questionsByID[questionID];

        getQuestionSolutionsAPI(testID, question.section_id, questionID).then(
            ({data}) => {

                dispatch(_pushQuestionSolutionsAC(data));

            });
    }

}


export {_pushQuestionDetailsAC, _fetchAndPushQuestionDetailsAsyncAC, changeCurrentQuestionAsyncAC, moveToNextQuestionAsyncAC};
