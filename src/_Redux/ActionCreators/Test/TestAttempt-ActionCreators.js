import {TEST_MARK_COMPLETE, TEST_PUSH_ATTEMPTS} from "../../actions/test";
import {finishTestAPI} from "../../../_Api/Tests/TestAttempts";
import {changeCurrentSectionAsyncAC} from "./Sections/Sections-ActionCreator";

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

                    const state = getState();

                    const sections = Object.keys(state.test.sectionsByID).sort();
                    window.close();

                }
            )

    }

}

export {pushTestAttemptAC, markTestCompleteAC, submitTestAsyncAc};
