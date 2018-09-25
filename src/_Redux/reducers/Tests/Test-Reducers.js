/**
 *
 * Currently the `test` redux store looks like this:
 *
 *  {
 *
 *  loadingCount: 1,
 *  character : "<character>",
 *  id: "<test_id>",
 *  name: "<name of test>",
 *  type: "<CAT or IBPS or SBI>"
 *  price : "<price of test>",
 *  currentSection : "<current section id>",
 *  currentQuestion: "<current question id>",
 *  sectionsByID: {
 *
 *
 *  '73': { # section id , guaranteed to be unique
        id: 73,
        is_complete: false,
        section_id: 73,
        time_spent: 0,
        section_attempt_id: 15342,
        created_date: '2017-03-27T18:10:56',
        name: 'Logical Reasoning',
        test_id: 59,
        total_time: 3600,
        questions:["123", "125","128"],  # question ids as strings, will be sorted
      },
       '74': {
        id: 74,
        is_complete: false,
        section_id: 74,
        time_spent: 0,
        section_attempt_id: 15343,
        created_date: '2017-03-27T18:15:41',
        name: 'Quantitative Aptitude',
        test_id: 59,
        total_time: 3600,
        questions:["12", "18","1811"],  # question ids as strings, will be sorted
      }
 *  },
 *
 *  questionsByID: {
      '966': { # question id, guaranteed to be unique
        attempt_status: null,
        choice_id: null,
        question_id: 966,
        section_attempt_id: 15344,
        tita_choice: null,
        section_id: 75
      },
      '993': {
        attempt_status: null,
        choice_id: null,
        question_id: 993,
        section_attempt_id: 15344,
        tita_choice: null,
        section_id: 75
      }

 *
 *
 */


/**
 * Insert details of the test (fetched from GET /tests/ID)
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function _pushTestDetails(state, action) {

    const {testDetails} = action;
    delete testDetails.instruction_html;

    return {...state, ...testDetails}


}

/**
 * Push Test Attempt Details (fetched from /tests/<TEST_ID>/attempts
 *
 * This should be called ONLY AFTER TEST DETAILS AND SECTION DETAILS ARE PUSHED
 *
 * It will merge the attempts of the test/section with the data of the test & section.
 *
 * ~~~~I AM SO SORRY THAT THIS FUNCTION IS SO COMPLEX AND CONVOLUTED~~~~
 * Fixes will be made on a happy day with sunshine
 *
 * This function is expected to be called only once, so a little performance hit doesnt
 * affect us too much
 *
 *
 * @param state
 * @param testAttempt
 * @returns {{sections: {}, questions: ({}|*), currentSection: number, currentQuestion: number}}
 */
function _pushTestAttemptDetails(state, {testAttempt}) {


    // get the section attempts from testAttempt object
    // and remove the question_attempts from each
    const sectionAttempts = testAttempt.section_attempts;

    const sectionAttemptsByID = sectionAttempts.reduce((obj, item) => {

        const copy = Object.assign({}, item);

        const attemptId = item.id;

        delete copy.question_attempts;

        obj[copy.section_id] = copy;
        obj[copy.section_id].section_attempt_id = attemptId;


        return obj;

    }, {});


    // merge the section attempt and section data together
    const merged = Object.keys(sectionAttemptsByID).reduce((obj, sectionID) => {

        obj[sectionID] = {...sectionAttemptsByID[sectionID], ...state.sectionsByID[sectionID]};


        return obj;

    }, {});


    // we need to flatten the question attempts
    // (currently it is nested under each section attempt

    let questions = testAttempt.section_attempts;

    // get all question attempts from the section_attempts
    questions = questions.map((item) => {

        return item.question_attempts;
    });


    questions = [].concat.apply(questions);
    questions = [].concat.apply([], questions); // flatten the nested arrays


    // we need to get which section a sectionAttempt belongs to
    // so we make a dictionary that maps sectionAttempt ID to section ID

    const sectionAttemptToSection = Object.keys(merged)
        .reduce((obj, sectionID) => {

            obj[merged[sectionID].section_attempt_id] = sectionID;

            return obj;

        }, {});


    // calculate which section the question attempt should belong to
    questions = questions.map((item) => {
        const section_id = sectionAttemptToSection[item.section_attempt_id];

        return {...item, section_id: parseInt(section_id)} //keys become strings, so force them back to int

    });

    // construct the questions object
    // the keys will be the question id, and the value will be the question object
    questions = questions.reduce((obj, item) => {
        obj[item.question_id] = item;
        return obj;
    }, {});


    // const questionBySection = questions.reduce((obj, item) => {
    //
    // }, {});


    // we need to find the first section that has is_complete = false

    const sortedSectionIds = Object.keys(merged).sort(); // sort sections ids

    const firstSectionId = sortedSectionIds.find((item) => {
        const intItem = parseInt(item);

        return merged[intItem].is_complete === false;
    });


    // we need to find the first question in the section that was just found

    const sortedQuestions = Object.keys(questions).sort();

    const firstQuestion = sortedQuestions.find((item) => {

        return parseInt(questions[item].section_id) === parseInt(firstSectionId);
    });


    // add a "questions" key under each section , and put all question
    // ids for that section as an array of strings
    // (useful for lookups, ordered operations etc)

    let sections = Object.keys(merged).map((sectionKey) => {


        let sortedQuestion = Object.keys(questions).map((questionKey) => {


            if (merged[sectionKey].id === questions[questionKey].section_id) {

                return questions[questionKey].question_id.toString();
            }

            return null;


        });

        sortedQuestion = sortedQuestion.filter((item) => {
            return item != null;
        });


        return {
            ...merged[sectionKey],
            questions: sortedQuestion

        }

    });


    sections = sections.reduce((obj, section) => {

        obj[section.id] = section;

        return obj;

    }, {});


    return {
        ...state,
        sectionsByID: sections,
        questionsByID: questions,
        currentSection: firstSectionId.toString(),
        currentQuestion: firstQuestion.toString()

    }

}


export {_pushTestAttemptDetails, _pushTestDetails};