import React from 'react';
import PropTypes from 'prop-types';
import {Card, Container} from 'reactstrap';


/**
 * The large feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */

function LargeFeatureCard(props) {


    return (
        <Card className={`col-md-5 shadow-sm ${props.fullWidthSize}`} style={{margin: "10px", width: '100%'}}>

            <div className="container" style={{padding: "4%"}}>

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