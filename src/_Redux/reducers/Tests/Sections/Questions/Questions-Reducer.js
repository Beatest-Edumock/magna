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


function _pushQuestionSolutions(state, {solutions}) {



    // let solutionsWithoutChoices = solutions;
    // delete  solutionsWithoutChoices['choices'];

    const choices = state.questionsByID[solutions.id].choices;



    const choicesWithSolutions = choices.map((choice) => {

        if (solutions.choices.length)
            if (solutions.choices[0].id === choice.id) {
                return {...choice, ...solutions.choices[0]}
            }


        return {...choice};


    });

    const solutionsWithoutChoices = Object.keys(solutions).reduce((object, key) => {
        if(key !== 'choices') {
            object[key] = solutions[key]
        }
        return object
    }, {});


    return {
        ...state,
        questionsByID: {
            ...state.questionsByID,
            [solutions.id]: {
                ...state.questionsByID[solutions.id],
                choices: choicesWithSolutions,
                ...solutionsWithoutChoices
            }
        }
    }

}


export {_changeCurrentQuestion, updateQuestionAttempt, _pushQuestionDetails, _pushQuestionSolutions}

