import {DECREMENT_LOADING, INCREMENT_LOADING, SECTION_PUSH_DETAILS, TEST_PUSH_ATTEMPTS, TEST_PUSH_DETAILS} from "../../actions/test";

import _ from 'lodash';

const defaultState = {
    loadingCount: 1

};

function testReducer(state = defaultState, action) {

    switch (action.type) {
        case INCREMENT_LOADING:
            return incrementLoading(state, action);
        case DECREMENT_LOADING:
            return decrementLoading(state, action);
        case TEST_PUSH_DETAILS:
            return pushTestDetails(state, action);

        case SECTION_PUSH_DETAILS:
            return pushSectionDetails(state, action);

        case TEST_PUSH_ATTEMPTS:
            return pushTestAttemptDetails(state, action);


        default :
            return state;
    }

}


function incrementLoading(state, action) {
    const loadingCount = state.loadingCount;
    return {...state, loadingCount: loadingCount + 1}

}

function decrementLoading(state, action) {
    const loadingCount = state.loadingCount;
    return {...state, loadingCount: loadingCount - 1}

}


function pushTestDetails(state, action) {

    const {testDetails} = action;
    delete testDetails.instruction_html;

    return {...state, ...testDetails}


}

function pushSectionDetails(state, {sectionsList}) {

    const sections = sectionsList.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

    return {...state, sections}

}


function pushTestAttemptDetails(state, {testAttempt}) {

    const sectionAttempts = testAttempt.section_attempts;

    const sectionAttemptsByID = sectionAttempts.reduce((obj, item) => {

        const copy = Object.assign({}, item);

        const attemptId = item.id;

        delete copy.question_attempts;

        obj[copy.section_id] = copy;
        obj[copy.section_id].section_attempt_id = attemptId;


        return obj;

    }, {});


    const merged = Object.keys(sectionAttemptsByID).reduce((obj, sectionID) => {

        obj[sectionID] = {...sectionAttemptsByID[sectionID], ...state.sections[sectionID]};

        return obj;

    }, {});


    let questions = testAttempt.section_attempts;

    questions = questions.map((item) => {

        return item.question_attempts;
    });


    questions = [].concat.apply(questions);
    questions = [].concat.apply([], questions);


    const sectionAttemptToSection = Object.keys(merged)
        .reduce((obj, sectionID) => {

            obj[merged[sectionID].section_attempt_id] = sectionID;

            return obj;

        }, {});


    questions = questions.map((item) => {
        const section_id = sectionAttemptToSection[item.section_attempt_id];

        return {...item, section_id: parseInt(section_id)}

    });

    questions = questions.reduce((obj, item) => {
        obj[item.question_id] = item;
        return obj;
    }, {});


    const sections = Object.keys(merged).sort();
    console.log(Object.keys(merged));
    console.log(sections);

    const firstSection = sections.find((item) => {
        const intItem = parseInt(item);

        return merged[intItem].is_complete === false;
    });


    const sortedQuestions = Object.keys(questions).sort();

    const firstQuestion = sortedQuestions.find((item) => {
        console.log(questions[item]);
        console.log(questions[item].section_id);
        console.log(firstSection);
        console.log(questions[item].section_id === firstSection);

        return parseInt(questions[item].section_id) === parseInt(firstSection);
    });


    return {
        ...state,
        sections: merged,
        questions,
        currentSection: parseInt(firstSection),
        currentQuestion: parseInt(firstQuestion)

    }

}

export {testReducer};