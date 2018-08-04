import React from 'react';
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

function LargeFeatureCard(props) {


    return (
        <Card className="col-md-4 col-lg-3 shadow-sm" style={{margin: "10px"}}>

            <div className="container" style={{padding: "10%"}}>

                <div className="text-center ">

                    <div style={{style}}>
                        <FontAwesomeIcon size={"6x"} icon={faConnectdevelop} color="#8C9EFF"/>
                    </div>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "10%"}}>
                    <Container>
                        <p className="font-weight-bold">
                            Grow your skills with the inspiring mentors
                        </p>
                    </Container>

                </div>
            </div>

        </Card>
    )

}


export {LargeFeatureCard}
