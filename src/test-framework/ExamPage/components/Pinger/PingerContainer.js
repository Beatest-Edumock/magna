import React from 'react';
import {connect} from 'react-redux'
import {PingerUI} from "./PingerUI";

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
}


function mapStateToProps(state, ownProps) {

    let timeLeft = 0;

    // TODO change hardcoded "CAT" after db update

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
        user: state.user
    };

}

export const PingerContainer = connect(mapStateToProps)(Pinger);


