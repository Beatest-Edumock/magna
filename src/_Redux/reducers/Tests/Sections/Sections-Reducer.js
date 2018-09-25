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

/**
 * Merge the details of the question attempt (which should be already fetched) with the question details
 * after fetching the details of the question itself
 *
 * The action that calls this reducer should be dispatched
 * by _fetchAndPushQuestionDetailsAsyncAC (i.e. not directly from a component).
 *
 * @param state
 * @param questionDetails
 * @returns {{questions: {}}}
 */
function _pushQuestionDetails(state, {questionDetails}) {

    return {
        ...state,
        questionsByID: {
            ...state.questionsByID,
            [questionDetails.id]: {...state.questionsByID[questionDetails.id], ...questionDetails}
        }
    }

}

export {_changeCurrentSection, markCurrentSectionComplete, _pushSectionDetails, _pushQuestionDetails}
