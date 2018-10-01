
import {TEST_MARK_COMPLETE, TEST_PUSH_ATTEMPTS} from "../../actions/test";

function pushTestAttemptAC(testAttempt) {
    return {type: TEST_PUSH_ATTEMPTS, testAttempt}
}

function markTestCompleteAC() {
    return {type: TEST_MARK_COMPLETE}
}

export {pushTestAttemptAC,markTestCompleteAC};
