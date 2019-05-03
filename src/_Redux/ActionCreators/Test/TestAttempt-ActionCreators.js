import {TEST_MARK_COMPLETE, TEST_PUSH_ATTEMPTS} from "../../actions/test";
import {finishTestAPI} from "../../../_Api/Tests/TestAttempts";
import {updateQuestionAttemptTimeAPI} from "../../../_Api/Tests/Sections/Questions/QuestionAttempts";
import {questionVisitTimeStampObj} from "../Test/Test-ActionCreator";
import {logoutUserApi} from "../../../_Api/User";
import {TEST_INSTRUCTIONS_ROUTE} from "../../../route";

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

                    if (window.opener) {
                        window.opener.location.reload(true);
                        window.close();
                    }
                    else if (navigator.userAgent.includes("SEB")) {
                        // a proctored browser

                        logoutUserApi().then(() => {
                            window.location.href = TEST_INSTRUCTIONS_ROUTE(state.test.id);


                        })
                    }
                }
            )

    }

}

export {pushTestAttemptAC, markTestCompleteAC, submitTestAsyncAc};
