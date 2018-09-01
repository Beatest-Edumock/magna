import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faGoogle,faTwitter,faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {Button, Container, Row, Col} from 'reactstrap'

/**
 * The commoon footer Component containing links to the required pages.
 */

function Footer() {


    return (
        <Container fluid={true} style={{padding: 0  }}>
            <Container fluid={true} style={{marginTop: '3%',filter: 'brightness(80%)',height: 200,backgroundImage: 'url("/img/blog-6.jpg")',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <Row style={{paddingTop:'6%',paddingLeft  :'4%',color:'#fff',alignItems: 'center'}}>
                    <a href="/aboutus" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Our Team</a>
                    <a href="/faq" style={{marginRight:'60vw',color: 'inherit',opacity:1,fontSize:14}}>FAQs</a>
                    <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://plus.google.com/112722904416257444024" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faGoogle} color="#fff"/></a>
                    <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://twitter.com/beatest_in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faTwitter} color="#fff"/></a>
                    <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://www.facebook.com/beatest.in/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faFacebookF} color="#fff"/></a>
                    <a href="/#contact-us"><Button style={{opacity:1,backgroundColor: 'Transparent'}}>Contact Us</Button></a>
                </Row>
                <Row style={{paddingTop:'2%',paddingLeft  :'4%',color:'#fff',alignItems: 'center'}}>
                    <img alt="Beatest Logo" src="/img/beatest.png" style={{height: '2em',marginRight: '3%'}}/>
                    <a style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>@2018Beatest India Pvt Ltd.</a>
                    <a href="/terms" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Privacy Policy</a>
                    <a href="/terms" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Legal</a>

                </Row>

            </Container>
        </Container>
    )

}


export {Footer}
