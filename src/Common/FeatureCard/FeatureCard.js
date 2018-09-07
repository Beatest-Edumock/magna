import React from 'react';
import PropTypes from 'prop-types';
import {Card, Container} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faCoffee, faCompactDisc, faCode, faSpinner, faCodeBranch} from '@fortawesome/free-solid-svg-icons'


const style = {
    width: "100%",
    height: "100%",
    padding: "10%"
};


/**
 * The feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */

function FeatureCard(props) {


    return (
        <Card className="col-md-4 col-lg-2 shadow-sm" style={{margin: "2%",width:100}}>

            <div className="container" style={{padding: "10%"}}>

                <div className="text-center ">

                    <Container>
                        {props.icon}
                    </Container>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "5%"}}>
                    <Container>
                            {props.text}
                    </Container>

                </div>
            </div>

        </Card>
    )

}


export {FeatureCard}

FeatureCard.propTypes = {

    /** The icon to be displayed in the feature card */
    icon: PropTypes.object,

    /** The text to be displayed in the feature card */
    text: PropTypes.object

};