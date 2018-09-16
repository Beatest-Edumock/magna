import {SECTION_PUSH_DETAILS, SECTION_UPDATE_CURRENT} from "../../actions/test";
import {fetchAndPushQuestionDetailsAsyncAC} from "./Questions-ActionCreator";

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

/**
 *
 * @param sectionID
 * @returns {Function} redux thunk that dispatch fetchAndPushQuestionDetailsAsyncAC if the question is
 * not fetch, and update current section and question.
 */
function changeCurrentSection(sectionID) {
    return (dispatch, getState) => {

        const state = getState();
        const currSectionDetails = state.test.sectionsByID[sectionID];
        const firstQuestionID = currSectionDetails.questions[0];

        // TODO question details?
        if(state.test.questionsByID[firstQuestionID] == null) {
            dispatch(fetchAndPushQuestionDetailsAsyncAC(firstQuestionID));
        }
        dispatch({type: SECTION_UPDATE_CURRENT, sectionID: sectionID, firstQuestionID: firstQuestionID})

    }

}
export {pushSectionDetailsAC, changeCurrentSection};
