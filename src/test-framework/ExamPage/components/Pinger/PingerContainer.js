import React from 'react';
import {connect} from 'react-redux'
import {PingerUI} from "./PingerUI";
import {pingAPI} from "../../../../_Api/Tests/TestAttempts";
import {changeCurrentSectionAsyncAC, markCurrentSectionCompleteAC} from "../../../../_Redux/ActionCreators/Test/Sections/Sections-ActionCreator";

/**
 * Orchestrate the Ping process.
 *
 * This container component is responsible for the
 * following tasks :
 *
 * 1. Update timer in UI every second
 * 2. Every 20 seconds, send a ping to the server (see pinger docs)
 * 3. If time left is 0, either submit test (for jumpable exams) or submit section(for non jumpable exams)
 * 3. Dispatch an action if time left on current section =0 and its a non jumpable section (i.e. switch sections)
 * 4. If time left is 0 , submit section (required for score calculation)
 */
class Pinger extends React.Component {

    /**
     * Tick function.
     * Will be called every second unless clear is called
     */
    tick() {

        this.setState((state, props) => {
            return {timeLeft: state.timeLeft - 1}

        });


        if (this.tickCount > 0 && this.tickCount % 5 === 0) {
            pingAPI(this.props.testID, this.props.currentSectionID, this.props.currentQuestionID);

        }


        const timeLeft = this.state.timeLeft;

        if (timeLeft <= 0) {
            let sections = this.props.sections;

            sections = Object.keys(sections).sort();


            this.props.markCurrentSectionComplete();
            this.props.changeCurrentSection(Object.keys(sections).indexOf(this.props.currentSectionID) + 1);

            this.setState((state, props) => {
                return {timeLeft: this.props.timeLeft}

            });


        }


        this.tickCount++;

    }

    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);

        this.state = {
            timeLeft: this.props.timeLeft
        };

        this.interval = setInterval(this.tick, 1000);
        this.tickCount = 0;

    }


    render() {

        return (<PingerUI timeLeft={this.state.timeLeft} userName={this.props.user.full_name}/>)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isError) {
            clearInterval(this.interval);
        }

    }
}


function mapStateToProps(state, ownProps) {

    let timeLeft = 0;

    // FIXME change hardcoded "CAT" after db update

    if (state.test.type === "CAT") {

        const timeSpent = state.test.sectionsByID[state.test.currentSection].time_spent;
        const totalTime = state.test.sectionsByID[state.test.currentSection].total_time;

        timeLeft = totalTime - timeSpent;

    }

    else {

        const time_details = Object.values(state.test.sectionsByID).reduce((obj, section) => {
            // all 'total_time' should have the same time, pick any
            obj.total_time = section.total_time;
            obj.time_spent += section.time_spent;
            return obj;

        }, {total_time: 0, time_spent: 0});
        timeLeft = time_details.total_time - time_details.time_spent;

    }

    return {
        timeLeft,
        user: state.user,
        testID: state.test.id,
        currentSectionID: state.test.currentSection,
        currentQuestionID: state.test.currentQuestion,
        sections: state.test.sectionsByID,
        isError: state.test.error !== null

    };

}

function mapDispatchToProps(dispatch) {

    return {
        changeCurrentSection: (sectionID) => {
            dispatch(changeCurrentSectionAsyncAC(sectionID))
        },
        markCurrentSectionComplete: () => {
            dispatch(markCurrentSectionCompleteAC());

        }

    }


}

export const PingerContainer = connect(mapStateToProps, mapDispatchToProps)(Pinger);


