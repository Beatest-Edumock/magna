import React from 'react';
import PropTypes from 'prop-types';
import {Card, Container} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faCoffee, faCompactDisc, faCode, faSpinner, faCodeBranch, faUserFriends, fa} from '@fortawesome/free-regular-svg-icons'
import {faUser,} from '@fortawesome/free-regular-svg-icons'
import {faConnectdevelop, faAmazon} from '@fortawesome/free-brands-svg-icons'


const style = {
    width: "100%",
    height: "100%",
    padding: "10%"
};

/**
 * The large feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */

function LargeFeatureCard(props) {


    return (
        <Card className="col-md-5 col-lg-3 shadow-sm" style={{margin: "10px"}}>

            <div className="container" style={{padding: "10%"}}>

                <div className="text-center " style={{}}>

                    <Container>
                        {props.icon}
                    </Container>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "10%"}}>
                    <Container>
                            {props.text}
                    </Container>

                </div>
            </div>

        </Card>
    )

}


export {LargeFeatureCard}

LargeFeatureCard.propTypes = {

    /** The icon to be displayed in the feature card */
    icon: PropTypes.object,

    /** The text to be displayed in the feature card */
    text: PropTypes.object

};