import React, {Component} from 'react';
import {MCQ} from "../MCQ/MCQContainer";

function RCUI(props) {
    return(
        <div className="container-fluid">
        <div className="row ">
            <div className="col-md-6 mx-md-1 my-sm-3 card">
                <div dangerouslySetInnerHTML={{__html: props.passageHtml}}/>
            </div>
            <hr/>
            <div className="col-md-5 my-sm-3 m-sm-0 py-sm-2">
                <MCQ question={props.question}/>
            </div>
        </div>
        </div>
        )
}
export {RCUI}