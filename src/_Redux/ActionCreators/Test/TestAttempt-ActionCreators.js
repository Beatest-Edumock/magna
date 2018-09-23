import {TEST_PUSH_ATTEMPTS, TEST_UPDATE_CHOICE_ATTEMPTS, TEST_UNDO_CHOICE_ATTEMPTS} from "../../actions/test";
import {updateQuestionAttemptAPI} from "../../../_Api/Tests/TestAttempts";

function pushTestAttemptAC(testAttempt) {
    return {type: TEST_PUSH_ATTEMPTS, testAttempt}
}


function _updateTestAttemptChoiceAC(changes) {
    return {type: TEST_UPDATE_CHOICE_ATTEMPTS, changes}
}

// TODO Khant review and remove
// function _revertQuestionAttemptChoiceAC() {
//     return {type: TEST_UNDO_CHOICE_ATTEMPTS}
// }


/**
 * Update the choice for the current question.
 * The current question MUST BE and MCQ type question.
 * If this dispatched for non MCQ type questions, it is an error.
 *
 * If the request fails for some reason, the choice is reverted to the
 * original value
 *
 * @param change an object to update the question attempt
 */
function updateQuestionAttemptAsyncAC(changes) {
    return (dispatch, getState) => {

        const state = getState();
        const testID = state.test.id;
        const sectionID = state.test.currentSection;
        const questionID = state.test.currentQuestion;
        const originalChoiceID = state.test.questionsByID[questionID].choice_id;

        dispatch(_updateTestAttemptChoiceAC(changes));

        updateQuestionAttemptAPI(testID, sectionID, questionID, changes)
            .catch(() => {
                    dispatch(_updateTestAttemptChoiceAC(originalChoiceID));
                }
            )

    }

}

export {pushTestAttemptAC, updateQuestionAttemptAsyncAC};
