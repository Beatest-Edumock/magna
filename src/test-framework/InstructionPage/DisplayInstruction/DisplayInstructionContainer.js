// Author @ Kyaw Khant Nyar
// Last Edit: Sept 3, 2018


// Imports
import React, {Component} from 'react'
import {DisplayInstructionUI} from "./DisplayInstructionUI";
import {getTestDetailsAPI} from "../../../_Api/Tests/Tests";
import {startTestAPI} from "../../../_Api/Tests/TestAttempts";
import {history} from "../../../__internals/CustomHistory";
import PropTypes from 'prop-types';
import {PERFORMANCE_PAGE_ROUTE} from "../../../route";


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
        this.setState({...this.state, instructions: ''});

        startTestAPI(this.props.testID)
            .then(() => {

                    // user should not be able to go 'back'
                    history.replace(`/test/${this.props.testID}`)


                }
            ).catch(({response}) => {


            // fixme find a better way to take user to
            // the performance page since test is already complete
            if (response.data.error_code === "TAC001") {
                history.replace(PERFORMANCE_PAGE_ROUTE(this.props.testID));
            }

        });

    };

    componentDidMount() {
        getTestDetailsAPI(this.props.testID)
            .then(({data}) => {
                const instructions = data.instruction_html;
                const test_title = data.name;

                // instruction state is now loaded with raw html instruction
                this.setState({
                    instructions: instructions,
                    title: test_title
                });
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