import {TEST_MARK_COMPLETE, TEST_PUSH_ATTEMPTS} from "../../actions/test";
import {finishTestAPI} from "../../../_Api/Tests/TestAttempts";

function pushTestAttemptAC(testAttempt) {
    return {type: TEST_PUSH_ATTEMPTS, testAttempt}
}

function markTestCompleteAC() {
    return {type: TEST_MARK_COMPLETE}
}


function submitTestAsyncAc() {

    return (dispatch, getState) => {
        const state = getState();

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
