import {TEST_UPDATE_QUESTIONATTEMPT} from "../../../../actions/test";
import {updateQuestionAttemptAPI} from "../../../../../_Api/Tests/TestAttempts";

function _updateQuestionAttemptAC(changes) {
    return {type: TEST_UPDATE_QUESTIONATTEMPT, changes}
}


/**
 * Mark the current question as seen
 *
 * @param initial if set to true, it will NOT DISPATCH if the attempt
 * status is not null. to be used when question is seen by the user for the
 * very first time.
 *
 *
 * @returns {Function}
 */
function setCurrentQuestionToSeenAsyncAC(initial = false) {

    return (dispatch, getState) => {

        if (initial) {

            const state = getState();
            const questionID = state.test.currentQuestion;
            const question = state.test.questionsByID[questionID];

            if (question.attempt_status !== null)
                return;

        }

        dispatch(updateQuestionAttemptAsyncAC({"attempt_status": "seen"}));
    }

}

function setCurrentQuestionToReviewAsyncAC() {
    return (dispatch, getState) => {

        dispatch(updateQuestionAttemptAsyncAC({"attempt_status": "review"}))
    }

}


function setCurrentQuestionChoiceIDAsyncAC(choiceID) {
    return (dispatch, getState) => {

        dispatch(updateQuestionAttemptAsyncAC({"choice_id": choiceID}))
    }
}

function setCurrentQuestionTITAAnswerAsyncAC(titaAnswer) {
    return (dispatch, getState) => {

        dispatch(updateQuestionAttemptAsyncAC({"tita_choice": titaAnswer}))
    }
}

/**
 *
 * Update the current question with some data.
 *
 * This method calculates a diff between the existing question from the store
 * and the changes object passed to it.
 *
 * If there are some actual differences, then the action is dispatched, else no
 * actions are dispatched.
 *
 * If an action is dispatched, an API call is made to the server.
 * If the api call fails, then the original changes are replaced in the store.
 *
 * @param changes an object to update the question attempt
 */
function updateQuestionAttemptAsyncAC(changes) {
    return (dispatch, getState) => {

        const state = getState();
        const testID = state.test.id;
        const sectionID = state.test.currentSection;
        const currentSection = state.test.sectionsByID[sectionID];
        const questionID = state.test.currentQuestion;
        const question = state.test.questionsByID[questionID];


        let diff = {}; // the diff object


        // will contain the key values of only those key,values that have changed
        let originalState = {};

        // calculate the diff between the values of the changes object
        // and the values of the corresponding keys in the question object
        // from the store
        Object.keys(changes).map((key) => {

            if (question[key] !== changes[key]) {
                diff[key] = changes[key];
                originalState[key] = question[key];
            }
            return null;

        });


        // dispatch actions only if some diff exists
        // and if current section is not marked complete
        if (Object.keys(diff).length !== 0 && !currentSection.is_complete && !state.test.is_complete) {
            dispatch(_updateQuestionAttemptAC(changes));

            updateQuestionAttemptAPI(testID, sectionID, questionID, changes)
                .catch(() => {
                        // revert back to original state if some error occurred
                        dispatch(_updateQuestionAttemptAC(originalState));
                    }
                )
        }

    }

}


export {setCurrentQuestionChoiceIDAsyncAC, setCurrentQuestionTITAAnswerAsyncAC, setCurrentQuestionToReviewAsyncAC, setCurrentQuestionToSeenAsyncAC, updateQuestionAttemptAsyncAC}