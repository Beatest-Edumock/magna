import {SECTION_PUSH_DETAILS, SECTION_UPDATE_CURRENT, TEST_MARK_CURRENT_SECTION_COMPLETE} from "../../../actions/test";
import {changeCurrentQuestionAsyncAC} from "./Questions/Questions-ActionCreator";

function _pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

/**
 *
 * !!!! ONLY CALL THIS FROM INSIDE changeCurrentSectionAsyncAC !!!!
 *
 * @param sectionID
 * @returns {{type: string, sectionID: *}}
 * @private
 */
function _changeCurrentSectionAC(sectionID) {
    return {type: SECTION_UPDATE_CURRENT, sectionID: sectionID}

}

/**
 *
 * Change the current section to a given section id.
 *
 * This will also change the current question to the first question
 * in the newly changed section.
 *
 * The changeInQuestion is handled by changeCurrentQuestionAsyncAC,
 * which means the next N questions are fetched too.
 *
 * @param sectionID
 * @returns {Function}
 *
 */
function changeCurrentSectionAsyncAC(sectionID) {


    return (dispatch, getState) => {

        const state = getState();
        sectionID = sectionID.toString();

        const currSectionDetails = state.test.sectionsByID[sectionID];

        const firstQuestionID = currSectionDetails.questions[0];

        dispatch(_changeCurrentSectionAC(sectionID));

        // fetch the very first question of the new section.
        dispatch(changeCurrentQuestionAsyncAC(firstQuestionID));


    }

}

function markCurrentSectionCompleteAC() {
    return {type: TEST_MARK_CURRENT_SECTION_COMPLETE}
}

export {_pushSectionDetailsAC, changeCurrentSectionAsyncAC, markCurrentSectionCompleteAC};
