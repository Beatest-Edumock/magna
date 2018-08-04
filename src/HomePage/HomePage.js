import React from "react";
import Typed from 'react-typed';
import {NavBarWithButtonsContainer} from "../Layout/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Jumbotron, Container, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap';
import {MultipleFeature} from "../Common/FeatureCard/MultipleFeatures";

//
//
function typedString() {
    /**
     * Returns the string in a type format , using typedjs
     *
     */
    return (
        <Typed
            strings={
                ['Here you can find anything',
                    "This is awesome",
                    "brilliant"]
            }
            typeSpeed={40}
            loop={true}
        />
    );
}

const bodyStyle = {
    background: 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) ,url(/img/landing-1.jpg) no-repeat center',
    backgroundSize: "100% auto",
};


function HomePage() {
    return (

        <div>
            <div>

                <Jumbotron fluid style={bodyStyle}>
                    <Container fluid>

                        <div className='text-center' style={{marginTop: "25%"}}>

                            <h2 className="text-light display-4">
                                {typedString()}
                            </h2>

                            <Container>
                                <Button primary color="blue" style={{marginTop: "10%"}}> View </Button>
                            </Container>

                        </div>

                    </Container>

                </Jumbotron>


                {/*<div>*/}

                <div className="container-fluid">

                    <NavBarWithButtonsContainer lightLogo/>

                </div>

                <MultipleFeature/>

            </div>
        </div>
    )
}


export {HomePage};


