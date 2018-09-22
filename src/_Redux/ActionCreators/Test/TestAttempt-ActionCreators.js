import {TEST_PUSH_ATTEMPTS, TEST_UPDATE_CHOICE_ATTEMPTS, TEST_UNDO_CHOICE_ATTEMPTS} from "../../actions/test";
import {updateQuestionAttemptChoiceAPI} from "../../../_Api/Tests/TestAttempts";

function pushTestAttemptAC(testAttempt) {

    return {type: TEST_PUSH_ATTEMPTS, testAttempt}

}


function _updateTestAttemptChoiceAC(choiceID) {
    return {type: TEST_UPDATE_CHOICE_ATTEMPTS, choiceID}
}

function _revertQuestionAttemptChoiceAC() {
    return {type: TEST_UNDO_CHOICE_ATTEMPTS}
}

function updateQuestionAttemptChoiceAsyncAC(choiceID) {
    return(dispatch, getState) => {

        const state = getState();
        const testID = state.test.id;
        const sectionID = state.test.currentSection;
        const questionID = state.test.currentQuestion;

        dispatch(_updateTestAttemptChoiceAC(choiceID));
        updateQuestionAttemptChoiceAPI(testID, sectionID, questionID, choiceID)
            // .catch(
            //     dispatch(_revertQuestionAttemptChoiceAC())
            // )

    }

}

export {pushTestAttemptAC, updateQuestionAttemptChoiceAsyncAC};
