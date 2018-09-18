import {SECTION_PUSH_DETAILS, SECTION_UPDATE_CURRENT} from "../../actions/test";
import {changeQuestionCurrentAsyncAC, fetchAndPushQuestionDetailsAsyncAC} from "./Questions-ActionCreator";

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

/**
 *
 * @param sectionID
 * @returns {Function} redux thunk that dispatch fetchAndPushQuestionDetailsAsyncAC if the question is
 * not fetch, and update current section and question.
 */
function changeCurrentSectionAC(sectionID) {
    return (dispatch, getState) => {

        const state = getState();
        const currSectionDetails = state.test.sectionsByID[sectionID];
        const firstQuestionID = currSectionDetails.questions[0];

        // fetch the very first question of the new section.
        dispatch(changeQuestionCurrentAsyncAC(firstQuestionID));
        // section change action
        dispatch({type: SECTION_UPDATE_CURRENT, sectionID: sectionID, firstQuestionID: firstQuestionID})

    }

}
export {pushSectionDetailsAC, changeCurrentSectionAC};
