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


    if (props.user === null || props.user.college === null) {

        return (
            <React.Fragment>

                <h1 className="display-4 text-center"> Placement Exams </h1>
                <hr/>
            </React.Fragment>
        )
    }


    if (props.user.college) {
        return <React.Fragment>

            <Jumbotron>

                <div className="offset-lg-5 col-lg-2 offset-2  col-8 ">
                    <img height="auto" width="100%" src={props.user.college.college_logo}/>
                </div>

                <h2 className="display-5 text-center text-secondary">{props.user.college.college_name}</h2>
                <hr/>

                <h1 className="display-4 text-center"> Placement Exams </h1>
            </Jumbotron>
        </React.Fragment>;
    }

    return (
        <React.Fragment>

            <h1 className="display-4 text-center"> Placement Exams </h1>
            <hr/>
        </React.Fragment>
    )

}


export {TopBannerUI};