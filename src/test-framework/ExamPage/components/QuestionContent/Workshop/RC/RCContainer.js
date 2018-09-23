import React, {Component} from 'react';
import {RCUI} from "./RCUI";

class RC extends Component{


    render() {
        return(
            <RCUI question={this.props.question} passageHtml={this.props.question.rc_passage}/>
        )
    }
}
export {RC};