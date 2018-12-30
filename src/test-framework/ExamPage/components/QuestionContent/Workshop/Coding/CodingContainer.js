import React from "react";
import {CodingUI} from "./CodingUI";
import axios from 'axios';

const mockInputs = [`1 2 3 4 5`,
    `1 1 2 3 5`];

const mockCorrectOutpts = [`1 2 3 4 5`, `1 1 2 3 5`];

const languages = [
    {value: 'python', label: 'python'},
    {value: 'cc', label: 'c++'},

];

class CodingContainer extends React.Component {
    state = {code: "", selectedLanguage: languages[0], outputs: null};

    constructor() {
        super();
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onSaveAndRunClick = this.onSaveAndRunClick.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
    }

    onSaveAndRunClick() {


        axios.post("/coding/run", {code: this.state.code, language: this.state.selectedLanguage.value, inputs: mockInputs}).then(({data}) => {

            this.setState({...this.state, outputs: data})
        });


        console.log(this.state.code);
    }

    onLanguageChange(language) {
        this.setState({...this.state, selectedLanguage: language})
    }

    onCodeChange(code) {

        this.setState(
            {
                ...this.state,
                code
            })
    }

    render() {

        return (<CodingUI onLanguageChange={this.onLanguageChange}
                          onSaveAndRunClick={this.onSaveAndRunClick}
                          onCodeChange={this.onCodeChange}

                          languages={languages}
                          question={this.props.question}
                          selectedLanguage={this.state.selectedLanguage}
                          inputs={mockInputs}
                          outputs={this.state.outputs}
                          correctOutputs={mockCorrectOutpts}
                          code={this.state.code}

        />)

    }

}


export {CodingContainer};
