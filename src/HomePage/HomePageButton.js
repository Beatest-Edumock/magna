import React, {Component} from 'react';
import {history} from "../__internals/CustomHistory";

class HomePageButton extends Component {

    constructor(props){
        super(props);
        this.changeRouteHandler = this.changeRoute.bind(this);


    }

    changeRoute() {
       history.push(this.props.url)
    }

    render() {
        return(
            <button className={this.props.className} onClick={this.changeRouteHandler}>
                {this.props.description}
            </button>
        )
    }
}

export {HomePageButton}