import React from 'react';
import "./styles.css"
import {LoadingSpinner} from "../../LoadingSpinner";

const MCQ = 'MCQ';
const RC = 'RC';
const TITA = 'TITA';

function createHTML(html) {
    return {__html: html}

}

function QuestionContentUI(props) {

    if (props.question.html == null) {
        return <LoadingSpinner/>
    }


    return (
        <div className="my-5 my-md-0" id="question-content-wrapper">
            <div id="question-content" dangerouslySetInnerHTML={createHTML(props.question.html)}/>
        </div>
    );
}


export {QuestionContentUI}
