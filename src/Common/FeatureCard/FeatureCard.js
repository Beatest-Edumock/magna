import React from 'react';
import {Card, Container} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faCoffee, faCompactDisc, faCode, faSpinner, faCodeBranch} from '@fortawesome/free-solid-svg-icons'


const style = {
    width: "100%",
    height: "100%",
    padding: "10%"
};

function FeatureCard(props) {


    return (
        <Card className="col-md-4 col-lg-2 shadow-sm" style={{margin: "2%"}}>

            <div className="container" style={{padding: "10%"}}>

                <div className="text-center ">

                    <div style={{style}}>
                        {props.icon}
                    </div>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "5%"}}>
                    <Container>
                        <p className="font-weight-bold">
                            {props.text}
                        </p>
                    </Container>

                </div>
            </div>

        </Card>
    )

}


export {FeatureCard}