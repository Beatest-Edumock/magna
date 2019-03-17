import {TEST_MARK_COMPLETE, TEST_PUSH_ATTEMPTS} from "../../actions/test";
import {finishTestAPI} from "../../../_Api/Tests/TestAttempts";
import {updateQuestionAttemptTimeAPI} from "../../../_Api/Tests/Sections/Questions/QuestionAttempts";
import {questionVisitTimeStampObj} from "../Test/Test-ActionCreator";

function pushTestAttemptAC(testAttempt) {
    return {type: TEST_PUSH_ATTEMPTS, testAttempt}
}

function markTestCompleteAC() {
    return {type: TEST_MARK_COMPLETE}
}


function submitTestAsyncAc() {

    const currentDate = new Date();

    const diff = (currentDate - questionVisitTimeStampObj.time) / 1000;

    questionVisitTimeStampObj.time = currentDate;

    return (dispatch, getState) => {
        const state = getState();
        updateQuestionAttemptTimeAPI(state.test.id, state.test.currentSection, state.test.currentQuestion, diff);

        finishTestAPI(state.test.id)
            .then(() => {
                    dispatch(markTestCompleteAC());


                    // refresh the parent window
                    window.opener.location.reload(true);
                    window.close();
                }
            )

    }

}

export {pushTestAttemptAC, markTestCompleteAC, submitTestAsyncAc};
