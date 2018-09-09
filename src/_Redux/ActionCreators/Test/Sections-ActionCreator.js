import {SECTION_PUSH_DETAILS} from "../../actions/test";

function pushSectionDetailsAC(sectionsList) {
    return {type: SECTION_PUSH_DETAILS, sectionsList}

}

export {pushSectionDetailsAC};
