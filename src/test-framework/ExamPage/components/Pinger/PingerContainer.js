import React from 'react';
import {connect} from 'react-redux'
import {PingerUI} from "./PingerUI";
import {pingAPI} from "../../../../_Api/Tests/TestAttempts";
import {changeCurrentSectionAsyncAC, submitCurrentSectionAsyncAC} from "../../../../_Redux/ActionCreators/Test/Sections/Sections-ActionCreator";
import {PING_TIME} from "./config";
import {submitTestAsyncAc} from "../../../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";
import {toast} from 'react-toastify';
import {disableInputsAC, enableInputsAC} from "../../../../_Redux/ActionCreators/Test/Test-ActionCreator";

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
 *
 *
 *                      !!!!!!!!!! WARNING !!!!!!!!!!
 *
 * This component should be added to the DOM exactly once.
 * An if-else condition that conditionally renders this
 * component will break it if it is torn down and rendered a second time.
 *
 *
 */
class Pinger extends React.Component {

    isPinging = false;

    /**
     * Tick function.
     * Will be called every second unless clear is called
     */
    tick() {


        const timeLeft = this.state.timeLeft;


        /**
         * If ping should happen, and it is currently time to ping
         *
         */
        if (this.tickCount > 0 && this.tickCount % PING_TIME === 0 && this.shouldPing) {

            pingAPI(this.props.testID,
                this.props.currentSectionID,
                this.props.currentQuestionID).then(() => {


                /**
                 * if time of current section is <0,
                 * proceed to submit section.
                 *
                 */
                if (timeLeft <= 0) {
                    this.props.disableInputs();


                    this.shouldPing = false;
                    clearInterval(this.interval);
                    this.tickCount = 0;

                    let sections = Object.keys(this.props.sections).sort();

                    let isLast = sections.indexOf(this.props.currentSectionID) === sections.length - 1;

                    /**
                     * Submitting the section will cause the conditions
                     * in componentDidUpdate to run (read comments in that method below)
                     */
                    if (!this.props.allowJumps) {
                        this.props.submitCurrentSection(!isLast);

                        if (isLast) {
                            this.props.submitTest();
                        }
                    }
                    else {
                        this.props.submitTest();
                    }


                }


            });
        }


        if (timeLeft > 0) {
            this.setState((state, props) => {
                return {timeLeft: state.timeLeft - 1}

            });
        }

        this.tickCount++;
    }

    constructor(props) {

        super(props);
        this.tick = this.tick.bind(this);
        this.shouldPing = true;

        this.state = {
            timeLeft: this.props.timeLeft
        };


        if (!this.props.isTestComplete) {
            this.interval = setInterval(this.tick, 1000);
        }
        this.tickCount = 0;

    }


    render() {

        return (<PingerUI
            timeLeft={this.state.timeLeft}
            userName={this.props.user.full_name}
            isTestComplete={this.props.isTestComplete}/>)
    }

    componentDidUpdate(prevProps, prevState) {

        /**
         * the current section was marked complete.
         * Stop the tick and disable ping.
         */
        if (!prevProps.sections[this.props.currentSectionID].is_complete
            &&
            this.props.sections[this.props.currentSectionID].is_complete) {


            toast.info("Section was automatically submitted");
            this.tickCount = 0;
            this.shouldPing = false;
            clearInterval(this.interval);

        }


        /**
         * Section has changed, set the interval (which should be disabled)
         * again.
         */
        if (prevProps.currentSectionID !== this.props.currentSectionID && !this.props.allowJumps && !this.props.isTestComplete) {

            this.shouldPing = true;
            this.setState({timeLeft: this.props.timeLeft});
            this.interval = setInterval(this.tick, 1000);
            // this.props.enableInputs();

        }

        if (prevProps.isTestComplete !== this.props.isTestComplete) {
            this.shouldPing = false;
            clearInterval(this.interval);
        }


        /**
         * If any error happens, disable the pinger.
         */
        if (this.props.isError) {
            clearInterval(this.interval);
        }

    }
}


function mapStateToProps(state, ownProps) {

    let timeLeft = 0;


    if (!state.test.allow_section_jumps) {

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
        allowSectionJumps: state.test.allow_section_jumps,
        isTestComplete: state.test.is_complete,
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


        submitCurrentSection: (shouldMove) => {
            dispatch(submitCurrentSectionAsyncAC(shouldMove));
        },
        submitTest: () => {
            dispatch(submitTestAsyncAc());
        },
        disableInputs: () => dispatch(disableInputsAC()),
        enableInputs: () => dispatch(enableInputsAC())


    }


}

export const PingerContainer = connect(mapStateToProps, mapDispatchToProps)(Pinger);


