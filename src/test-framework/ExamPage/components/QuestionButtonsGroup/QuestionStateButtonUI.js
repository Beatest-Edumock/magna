import React, {Component} from 'react';

function QuestionStateButtonUI(props) {

    var btn_color;
    var btn_text;
    switch (props.type) {

        case "CA":
            btn_color = "btn-secondary";
            btn_text = "Clear Response";
            break;

        case "MR":
            btn_color = "btn-success";
            btn_text = "Mark For Review";
            break;

        case "RR":
            btn_color = "btn-danger";
            btn_text = "Remove Mark";
    }
    return (
        <button className={`btn ${btn_color}`} onClick={() => props.questionCallBack()}>
            {btn_text}
        </button>
    )

}

export {QuestionStateButtonUI}