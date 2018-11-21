// Author @ Kyaw Khant Nyar
// Last Edit: Sept 1, 2018

// imports
import React, {Component} from 'react';
import {DisplayInstruction} from "./DisplayInstruction";

/**
 * InstructionPage component get testID from the URL and
 * pass it on to the container to render the Instruction and a button to start
 * the test.
 */
class InstructionPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        // assign testID from the URL parameters
        const {testID} = this.props.match.params;

        return (
            <DisplayInstruction testID={testID}/>


        )
    }
}


export {InstructionPage};