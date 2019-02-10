import React from "react";
import RichTextEditor from 'react-rte';
import Select from "react-select";

import "react-tabs/style/react-tabs.css"

class SubjectiveUI extends React.Component {


    render() {

        return (
            <div className="container-fluid ">

                <div className="row ">
                    <div className="col-md-6 mx-md-0 my-sm-3 card h-60vh-md-scroll scroll-x-auto">
                        <div dangerouslySetInnerHTML={{__html: this.props.question.html}}/>
                    </div>
                    <hr/>


                    <div className="col-md-5 my-sm-3 m-sm-0 py-sm-2 border h-60vh-md-scroll">
                        <RichTextEditor
                            value={this.props.value}
                            onChange={this.props.onTextChange}
                        />

                    </div>

                </div>

                <div className="offset-7 row">

                    <div className="col-2 px-1">
                        <button className=" btn btn-success btn-block"
                                onClick={this.props.onSaveClick}>Save
                        </button>
                    </div>
                </div>
            </div>

        );

    }

}


export {SubjectiveUI};