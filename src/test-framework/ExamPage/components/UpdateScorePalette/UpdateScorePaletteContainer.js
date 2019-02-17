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

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.question.id !== this.props.question.id) {
            this.setState({
                customInput: ""
            });
        }

        return true;
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
            />

        )
    }
}



function mapStateToProps(state) {
    return {
        testIsComplete: state.test.is_complete,
    }
}


const UpdateScorePaletteContainer = connect(mapStateToProps, null)(UpdateScorePalette);

export {UpdateScorePaletteContainer}