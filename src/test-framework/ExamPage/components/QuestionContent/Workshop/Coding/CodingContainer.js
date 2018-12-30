import React from "react";
import {CodingUI} from "./CodingUI";


class CodingContainer extends React.Component {


    render() {

        return (<CodingUI question={this.props.question}/>)

    }

}


export {CodingContainer};
