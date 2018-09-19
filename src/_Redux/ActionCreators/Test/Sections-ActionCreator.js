import {SECTION_PUSH_DETAILS, SECTION_UPDATE_CURRENT} from "../../actions/test";
import {changeQuestionCurrentAsyncAC, fetchAndPushQuestionDetailsAsyncAC} from "./Questions-ActionCreator";

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

function _changeCurrentSectionAC(sectionID) {
    return {type: SECTION_UPDATE_CURRENT, sectionID: sectionID}

}

/**
 *
 * @param sectionID
 * @returns {Function} redux thunk that dispatch fetchAndPushQuestionDetailsAsyncAC if the question is
 * not fetch, and update current section and question.
 */
function changeCurrentSectionAsyncAC(sectionID) {
    return (dispatch, getState) => {

        const state = getState();

        const currSectionDetails = state.test.sectionsByID[sectionID];

        const firstQuestionID = currSectionDetails.questions[0];

        // section change action
        dispatch(_changeCurrentSectionAC(sectionID));

        // fetch the very first question of the new section.
        dispatch(changeQuestionCurrentAsyncAC(firstQuestionID));


    }

}

export {pushSectionDetailsAC, changeCurrentSectionAsyncAC};
