import React from "react";
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Button, Col, Container, Jumbotron, Row} from 'reactstrap';
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";
import {LARGE_FEATURE_CARD_ELEMENTS, MENTORS} from './data'
import {Footer} from '../Layout/Footer/Footer'


const bodyStyle = {
    background: 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) ,url(/img/landing-21.jpg) no-repeat center',
    backgroundSize: "100% auto",
    opacity: 0.9,
    filter: 'brightness(200%)',
    marginBottom: 0
};


function AboutUsPage() {
    return (

        <div>
            <Container fluid={true} style={{padding:0}}>

                <NavBarWithButtonsContainer/>

            </Container>
            <Jumbotron fluid style={bodyStyle}>

                <Container style={{marginTop: "30%",color: 'white'}}>
                        <Row style={{justifyContent:'center',padding: '2%'}}>
                            <h1 style={{textAlign: 'center',fontWeight: 300,fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Hi, We're Beatest!</h1>
                        </Row>
                        <Row style={{justifyContent:'center',padding: '2%'}}>
                            <h6 style={{textAlign: 'center',opacity:0.5,fontWeight: 300,fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>A group of innovative and like-minded folks making useful and enduring technology for your education</h6>
                        </Row>
                </Container>


            </Jumbotron>
            <Container fluid={true} style={{background: '#fafafa',paddingTop: '6%',paddingBottom: '4%'}}>
                <Row style={{justifyContent: 'center'}}>
                    <h2 style={{fontWeight: 300,fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>What drives us</h2>
                </Row>
                <Row style={{textAlign: 'center',paddingLeft:'16%',paddingRight: '16%',paddingTop: '2%'}}>
                    <span style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontSize: 22,color:'gray'}}>Whether you’re preparing for a competitive exam or for your placements, we have your prep needs covered!</span>
                </Row>
                <Row style={{padding: '6%'}}>
                    <Col>
                        <h5>Fervor</h5>
                        <p style={{color: 'gray',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>We have a fervent desire to improve the quality of education and take mediocrity out of the system. We recognize the limitations and help you to overcome them.</p>
                    </Col>
                    <Col>
                        <h5>Ingenuity</h5>
                        <p style={{color: 'gray',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>With the zeal to innovate and explore new concepts that can change the lives of students for the better, we have a knack for novelty and creativity.</p>
                    </Col>
                    <Col>
                        <h5>Singularity</h5>
                        <p style={{color: 'gray',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>We share a vision to create an impact on the students across the community by a product that fulfills their educational requirements easily and effectively. Being one of a kind, we strive to offer a smarter way to learn.</p>
                    </Col>
                </Row>

            </Container>
            <Container fluid={true} style={{paddingBottom: '4%'}}>
                <Row style={{justifyContent: 'center',paddingBottom:'5%'}}>
                    <h2 style={{paddingTop: '6%',fontWeight: 300,fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Meet the makers</h2>
                </Row>  
                <Row  style={{justifyContent: 'center'}}>
                    {
        
                        LARGE_FEATURE_CARD_ELEMENTS.map((feature_card) => {
                            return (
                                    <LargeFeatureCard  
                                        fullWidthSize="col-lg-2"
                                        icon={feature_card.img}
                                        text={feature_card.text}
                                    />
                                

                            );
                        })

                    }
                </Row>
            </Container>
            <Container style={{paddingBottom: '4%'}}>
                <Row style={{justifyContent: 'center',paddingBottom:'5%'}}>
                    <h2 style={{paddingTop: '6%',fontWeight: 300,fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Mentors</h2>
                </Row>  
                <Row  style={{justifyContent: 'center'}}>
                    {
        
                        MENTORS.map((mentor) => {
                            return (
                                    <LargeFeatureCard  
                                        icon={mentor.img}
                                        text={mentor.text}
                                    />
                                

                            );
                        })

                    }
                </Row>
            </Container>
            <Container fluid={true} style={{background: '#fafafa',paddingTop: '6%',paddingBottom: '4%'}}>
                <Row style={{justifyContent: 'center',paddingBottom:'2%'}}>
                    <h2 style={{fontWeight: 300,fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>We're always looking for talent</h2>  
                </Row>
               <Row style={{textAlign: 'center',paddingLeft:'16%',paddingRight: '16%'}}>
                    <span style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontSize: 22,color:'gray'}}>Got what it takes to work with us? Great! Send us a link to your resumé or portfolio to become part of our talent pool.</span>
                </Row>
                <Row style={{justifyContent: 'center',paddingTop: '3%'}}>
                    <Button color="primary">SEE JOB OPENINGS</Button>
                </Row>

            </Container>
            <Footer/>

        </div>
    )
}


export {AboutUsPage};


