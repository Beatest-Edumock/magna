import {SECTION_PUSH_DETAILS, SECTION_UPDATE_CURRENT} from "../../actions/test";

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

function changeCurrentSection(sectionID) {
    return {type: SECTION_UPDATE_CURRENT, sectionID}

}
export {pushSectionDetailsAC, changeCurrentSection};
