/**
 * change the current section
 * @param state
 * @param sectionID
 * @param firstQuestionID
 * @returns {{currentSection: number}}
 */
function _changeCurrentSection(state, {sectionID}) {
    return {...state, currentSection: sectionID}
}


/**
 * Insert section details (fetched from GET /tests/<TEST_ID>/sections)
 *
 * @param state
 * @param sectionsList
 * @returns {{sections: *}}
 */
function _pushSectionDetails(state, {sectionsList}) {

    const sections = sectionsList.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

    return {...state, sectionsByID: sections}

}

function markCurrentSectionComplete(state) {

    return {
        ...state,
        sectionsByID: {
            ...state.sectionsByID,

            [state.currentSection]: {
                ...state.sectionsByID[state.currentSection],
                is_complete: true
            }
        }
    }

}


export {_changeCurrentSection, markCurrentSectionComplete, _pushSectionDetails}
