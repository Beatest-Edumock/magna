import React from "react";
import AceEditor from 'react-ace';
import Select from "react-select";

import "react-tabs/style/react-tabs.css"
import {TestCaseDisplay} from "./OutputArea/TestCaseDisplay";
import LoadingOverlay from 'react-loading-overlay';


require('brace/mode/java');
require('brace/mode/python');
require('brace/theme/solarized_light');


class CodingUI extends React.Component {


    render() {


        return (
            <div className="container-fluid ">

                <div className="row ">
                    <div className="col-md-6 mx-md-0 my-sm-3 card h-60vh-md-scroll scroll-x-auto">
                        <div dangerouslySetInnerHTML={{__html: this.props.question.html}}/>
                    </div>
                    <hr/>


                    <div className="col-md-5 my-sm-3 m-sm-0 py-sm-2 border h-60vh-md-scroll">

                        <LoadingOverlay
                            active={this.props.running}
                            spinner
                            text='Running Code'
                            styles={{
                                overlay: (base) => ({
                                    ...base,
                                    background: 'rgba(0, 0, 0, 0.2)'
                                })
                            }}
                        >

                            <div>
                                <AceEditor
                                    width={"100%"}
                                    mode={this.props.selectedLanguage.value}
                                    theme="solarized_light"
                                    name="coding-text-area"
                                    value={this.props.code}
                                    onChange={this.props.onCodeChange}
                                    readOnly={this.props.readOnly}
                                />
                            </div>
                        </LoadingOverlay>

                    </div>

                </div>

                <div className="offset-7 row">

                    <div className="col-4 px-1">
                        <Select
                            value={this.props.selectedLanguage}
                            onChange={this.props.onLanguageChange}
                            options={this.props.languages}
                        />
                    </div>
                    <div className="col-2 px-1">
                        <button className=" btn btn-success btn-block"
                                onClick={this.props.onSaveClick}>Save
                        </button>
                    </div>
                    <div className="col-2 px-1">
                        <button className=" btn btn-secondary btn-block"
                                onClick={this.props.onRunClick}>Run
                        </button>
                    </div>


                </div>

                {this.props.outputs &&
                <div className="row  my-2 ">
                    <div className="col-12 ">
                        <TestCaseDisplay inputs={this.props.inputs}
                                         userOutputs={this.props.outputs}
                                         correctOutputs={this.props.correctOutputs}/>
                    </div>


                </div>
                }
            </div>

        );

    }

}


export {CodingUI};