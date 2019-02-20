/**
 *
 * Entry point of the test reducers.
 *
 * All the cases along with the initial state are defined here.
 * The actual reducer functions are named as <NAME>-Reducers.js
 *
 */
import {
    DECREMENT_LOADING,
    INCREMENT_LOADING,
    QUESTION_PUSH_DETAILS,
    QUESTION_PUSH_SOLUTIONS,
    QUESTION_UPDATE_CURRENT, QUESTION_UPDATE_SCORE,
    SECTION_PUSH_DETAILS,
    SECTION_UPDATE_CURRENT,
    TEST_DISABLE_INPUTS,
    TEST_ENABLE_INPUTS,
    TEST_MARK_COMPLETE,
    TEST_MARK_CURRENT_SECTION_COMPLETE,
    TEST_PUSH_ATTEMPTS,
    TEST_PUSH_DETAILS,
    TEST_PUSH_ERROR, TEST_SET_REVIEW,
    TEST_UPDATE_QUESTIONATTEMPT,
} from "../../actions/test";


import {_changeCurrentSection, _pushSectionDetails, markCurrentSectionComplete} from "./Sections/Sections-Reducer";
import {_changeCurrentQuestion, _pushQuestionDetails, _pushQuestionSolutions, updateQuestionAttempt} from "./Sections/Questions/Questions-Reducer";
import {decrementLoading, disableInputs, enableInputs, incrementLoading, pushError} from "./UI-Reducers";
import {_pushTestAttemptDetails, _pushTestDetails, markTestComplete, setReviewMode, updateQuestionScore} from "./Test-Reducers";


const defaultState = {
    loadingCount: 1, // initially start with loading state
    error: null,
    inputsDisabled: false

};

function testReducer(state = defaultState, action) {

    switch (action.type) {
        case INCREMENT_LOADING:
            return incrementLoading(state, action);
        case DECREMENT_LOADING:
            return decrementLoading(state, action);

        case SECTION_PUSH_DETAILS:
            return _pushSectionDetails(state, action);

        case TEST_PUSH_ATTEMPTS:
            return _pushTestAttemptDetails(state, action);
        case QUESTION_PUSH_DETAILS:
            return _pushQuestionDetails(state, action);
        case QUESTION_UPDATE_CURRENT:
            return _changeCurrentQuestion(state, action);

        case TEST_PUSH_DETAILS:
            return _pushTestDetails(state, action);
        case SECTION_UPDATE_CURRENT:
            return _changeCurrentSection(state, action);

        case TEST_UPDATE_QUESTIONATTEMPT:
            return updateQuestionAttempt(state, action);

        case TEST_PUSH_ERROR:
            return pushError(state, action);

        case TEST_MARK_CURRENT_SECTION_COMPLETE:
            return markCurrentSectionComplete(state);

        case TEST_MARK_COMPLETE:
            return markTestComplete(state);

        case TEST_DISABLE_INPUTS:
            return disableInputs(state);

        case TEST_ENABLE_INPUTS:
            return enableInputs(state);

        case QUESTION_PUSH_SOLUTIONS:
            return _pushQuestionSolutions(state, action);

        case QUESTION_UPDATE_SCORE:
            return updateQuestionScore(state, action);

        case TEST_SET_REVIEW:
            return setReviewMode(state);
        default :
            return state;
    }

}

export {testReducer};