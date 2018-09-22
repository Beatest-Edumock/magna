import {TEST_PUSH_ATTEMPTS, TEST_UPDATE_CHOICE_ATTEMPTS, TEST_UNDO_CHOICE_ATTEMPTS} from "../../actions/test";
import {updateQuestionAttemptChoiceAPI} from "../../../_Api/Tests/TestAttempts";

function pushTestAttemptAC(testAttempt) {
    return {type: TEST_PUSH_ATTEMPTS, testAttempt}
}


function _updateTestAttemptChoiceAC(choiceID) {
    return {type: TEST_UPDATE_CHOICE_ATTEMPTS, choiceID}
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
 * @param choiceID
 */
function updateQuestionAttemptChoiceAsyncAC(choiceID) {
    return (dispatch, getState) => {

        const state = getState();
        const testID = state.test.id;
        const sectionID = state.test.currentSection;
        const questionID = state.test.currentQuestion;
        const originalChoiceID = state.test.questionsByID[questionID].choice_id;

        dispatch(_updateTestAttemptChoiceAC(choiceID));

        updateQuestionAttemptChoiceAPI(testID, sectionID, questionID, choiceID)
            .catch(() => {
                    dispatch(_updateTestAttemptChoiceAC(originalChoiceID));
                }
            )

    }

}

export {pushTestAttemptAC, updateQuestionAttemptChoiceAsyncAC};
