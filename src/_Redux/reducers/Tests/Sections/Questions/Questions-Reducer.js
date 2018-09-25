/**
 * change the current question, fetching required questions
 * are done by changeCurrentQuestionAsyncAC by dispatching
 * _fetchAndPushQuestionDetailsAsyncAC on the questionID
 * @param state
 * @param questionID
 * @returns {{currentQuestion: *}}
 */
function _changeCurrentQuestion(state, {questionID}) {
    return {...state, currentQuestion: questionID}
}


/**
 *
 * @param state
 * @param changes
 * @returns
 */
function updateQuestionAttempt(state, {changes}) {

    const question = state.currentQuestion;
    return {
        ...state,
        questionsByID: {
            ...state.questionsByID,
            [question]: {
                ...state.questionsByID[question],
                ...changes
            }

        }
    }


}

export {_changeCurrentQuestion, updateQuestionAttempt}

