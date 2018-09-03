// Author @ Kyaw Khant Nyar
// Last Edit: Sept 1, 2018


// Imports
import React, {Component} from 'react'
import {DisplayInstructionUI} from "./DisplayInstructionUI";
import {GetTestWithIDAPI} from "../../../_Api/Tests";


// DisplayInstructionContainer
class DisplayInstructionContainer extends Component {

    // instructions: the RAW HTML for the test instruction
    state = {
        instructions: '',
    };

    componentDidMount() {
        GetTestWithIDAPI(this.props.testID)
            .then(({data}) => {
                const instructions = data.instruction_html;
                // instruction state is now loaded with raw html instruction
                this.setState ( {instructions} );
            })
    }

    render() {
        return (
            <div>
                <DisplayInstructionUI instructions={this.state.instructions}/>
            </div>
        )
    }
}

export {DisplayInstructionContainer}
