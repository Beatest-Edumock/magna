
import {TEST_PUSH_ATTEMPTS} from "../../actions/test";

function pushTestAttemptAC(testAttempt) {
    return {type: TEST_PUSH_ATTEMPTS, testAttempt}
}

export {pushTestAttemptAC};
