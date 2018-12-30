import React from "react";
import AceEditor from 'react-ace';
import Select from "react-select";

require('brace/mode/java');
require('brace/mode/python');
require('brace/theme/solarized_light');


const languages = [
    {value: 'python', label: 'python'},
    {value: 'c++', label: 'c++'},


];

class CodingUI extends React.Component {

    state = {code: "", selectedLanguage: languages[0]};

    constructor() {
        super();
        this.onLanguageChange = this.onLanguageChange.bind(this);
    }

    onLanguageChange(language) {

        this.setState({...this.state, selectedLanguage: language})


    }


    render() {


        return (
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-md-6 mx-md-0 my-sm-3 card h-60vh-md-scroll scroll-x-auto">
                        <div dangerouslySetInnerHTML={{__html: this.props.question.html}}/>
                    </div>
                    <hr/>


                    <div className="col-md-5 my-sm-3 m-sm-0 py-sm-2 border h-60vh-md-scroll">

                        <AceEditor
                            width={"100%"}
                            mode={this.state.selectedLanguage.value}
                            theme="solarized_light"
                            name="coding-text-area"
                        />
                    </div>

                </div>

                <div className="offset-7 row">

                    <div className="col-4 px-1">
                        <Select
                            value={this.state.selectedLanguage}
                            onChange={this.onLanguageChange}
                            options={languages}
                        />
                    </div>
                    <div className="col-2 px-1">
                        <button className=" btn btn-success">Save and Run</button>
                    </div>


                </div>
                <div className="row ">

                    <div className="col-12 border">
                    </div>
                </div>
            </div>

        );

    }

}


export {CodingUI};