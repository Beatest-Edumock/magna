import React from 'react';
import {LoadingScreen} from "./LoadingScreen";


class ExamPageUI extends React.Component {

    render() {
        if (this.props.loading)
            return <LoadingScreen/>;
        else {
            return <div>Read</div>;
        }
    }
}

export {ExamPageUI}