// Imports
import React, {Component} from 'react'
import {DisplayInstructionUI} from "./DisplayInstructionUI";
import {getTestDetailsAPI} from "../../../_Api/Tests/Tests";
import {startTestAPI} from "../../../_Api/Tests/TestAttempts";
import {history} from "../../../__internals/CustomHistory";
import PropTypes from 'prop-types';
import {encodeTestID} from "../../Utilities";
import {LoginModal} from "./LoginModal/LoginModal";
import {connect} from 'react-redux';


// DisplayInstructionContainer
class DisplayInstruction extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.startTestHandelClick.bind(this);
        this.startTest = this.startTest.bind(this);

    }

    // instructions: the RAW HTML for the test instruction
    state = {
        instructions: '',
        title: '',
        shouldShowModal: false

    };

    /**
     * on click handler for start test button
     */
    startTestHandelClick() {

        if (!this.props.user) {
            this.setState({...this.state, shouldShowModal: true});
            return;
        }
        else {
            this.startTest();
        }


    };


    startTest() {

        this.setState({...this.state, instructions: ''});

        startTestAPI(this.props.testID)
            .then(() => {

                    history.push(`/test/${encodeTestID(this.props.testID)}`)


                }
            ).catch(({response}) => {


            // fixme find a better way to take user to
            // the performance page since test is already complete
            // if (response.data.error_code === "TAC001") {
            //     history.replace(PERFORMANCE_PAGE_ROUTE(this.props.testID));
            // }

        });
    }

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
                <LoginModal modal={this.state.shouldShowModal} onLoginCallback={() => {
                    this.startTest();
                }}/>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {

    return {
        isUserLoggedIn: state.user,
        user: state.user,
        ownProps
    }

}

const DisplayInstructionContainer = connect(mapStateToProps)(DisplayInstruction);
export {DisplayInstructionContainer}

DisplayInstructionContainer.propTypes = {
    testID: PropTypes.string
};