import {SECTION_PUSH_DETAILS, CURR_SECTION_STATE} from "../../actions/test";

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

function changeCurrentSection(sectionID) {
    return {type: CURR_SECTION_STATE, sectionID}

}
export {pushSectionDetailsAC, changeCurrentSection};
