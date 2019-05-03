import React from 'react'
import {Jumbotron} from "reactstrap";


/**
 * Handles the top area of placements page.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function TopBannerUI(props) {

    if (!props.corporate) {
        return <></>
    }


    return <React.Fragment>

        <Jumbotron>

            <div className="offset-lg-5 col-lg-2 offset-2  col-8 ">
                <img height="auto" width="100%" src={props.corporate.logo}/>
            </div>

            <h2 className="display-5 text-center text-secondary">{props.corporate.name}</h2>

            <hr/>
            <h4 className="text-center text-secondary"><a href={props.corporate.url}>{props.corporate.name}</a></h4>
        </Jumbotron>
    </React.Fragment>
        ;


}


export {TopBannerUI};