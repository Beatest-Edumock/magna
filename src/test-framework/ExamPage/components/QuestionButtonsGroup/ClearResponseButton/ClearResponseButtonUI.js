import React from 'react';

function ClearResponseButtonUI(props) {

    let text = "Clear Response";

    let color = "btn-danger";

    let visibility = "d-none";

    if (props.hasAnswered) {

        visibility = ""
    }


    return (<button className={`w-100 btn ${text} ${color} ${visibility}`} onClick={props.onClickHandler}>{text}</button>);


}

export {ClearResponseButtonUI};