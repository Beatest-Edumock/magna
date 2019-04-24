import React, {Component} from 'react';
import {UpdateScorePaletteUI} from "./UpdateScorePaletteUI";
import {connect} from 'react-redux';
import {toast} from 'react-toastify';

class UpdateScorePalette extends Component {

    constructor(props) {
        super(props);
        this.onCustomInputChange = this.onCustomInputChange.bind(this);

        this.state = {
            customInput: ""
        };
    }


    onCustomInputChange(event) {
        this.setState({...this.state, customInput: event.target.value});
    }

    render() {

        return (
            <UpdateScorePaletteUI
                testIsComplete={this.props.testIsComplete}
                onCustomInputChange={this.onCustomInputChange}
                customInput={this.state.customInput}
                maxScore={this.props.currentQuestion.points_correct}
                obtainedScore={this.props.currentQuestion.score}
                timeSpent={this.props.currentQuestion.time_spent}
            />

        )
    }
}


function mapStateToProps(state) {


    return {
        testIsComplete: state.test.is_complete,
        currentQuestion: state.test.questionsByID[state.test.currentQuestion]
    }
}


const UpdateScorePaletteContainer = connect(mapStateToProps, null)(UpdateScorePalette);

export {UpdateScorePaletteContainer}