// Author @ Kyaw Khant Nyar
// Last Edit: Sept 3, 2018


// Imports
import React, {Component} from 'react'
import {DisplayInstructionUI} from "./DisplayInstructionUI";
import {GetTestDetailsAPI} from "../../../_Api/Tests/Tests";
import {StartTestAPI} from "../../../_Api/Tests/TestAttempts";
import {history} from "../../../__internals/CustomHistory";
import PropTypes from 'prop-types';



// DisplayInstructionContainer
class DisplayInstructionContainer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.startTestHandelClick.bind(this);

    }
    // instructions: the RAW HTML for the test instruction
    state = {
        instructions: '',
        title: '',

    };

    /**
     * on click handler for start test button
     */
    startTestHandelClick() {
        StartTestAPI(this.props.testID);
        // reroute to /tests/:testID
        history.push({
            pathname: `/tests/${this.props.testID}`,
        })
    };

    componentDidMount() {
        GetTestDetailsAPI(this.props.testID)
            .then(({data}) => {
                const instructions = data.instruction_html;
                const test_title = data.name;
                // instruction state is now loaded with raw html instruction
                this.setState ( {
                    instructions: instructions,
                    title: test_title
                } );
            })
    }

    render() {
        return (
            <div>
                <DisplayInstructionUI instructions={this.state.instructions} name={this.state.title} startfunc={this.handleClick}/>
            </div>
        )
    }
}

export {DisplayInstructionContainer}

DisplayInstructionContainer.propTypes = {
    testID: PropTypes.string
}