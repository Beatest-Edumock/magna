import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faGoogle,faLinkedinIn,faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {Button, Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'

/**
 * The commoon footer Component containing links to the required pages.
 */

function Footer() {


    return (
        <Container fluid={true} style={{padding: 0}}>
            <Container fluid={true} style={{filter: 'brightness(80%)',height: 200,backgroundColor: '#404040',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <Row style={{paddingTop:'6%',paddingLeft  :'4%',color:'#fff',alignItems: 'center'}}>
                    <Link to="/about-us" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Our Team</Link>
                    <Link to="/faq" style={{marginRight:'60vw',color: 'inherit',opacity:1,fontSize:14}}>FAQs</Link>
                    <Link to="/" style={{marginRight:'3%',color: 'inherit',opacity:1}} to="https://plus.google.com/112722904416257444024" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faGoogle} style={{background: "#dd4b39",color: "white",width:'1em',height:'1em'}}/></Link>
                    <Link to="/" style={{marginRight:'3%',color: 'inherit',opacity:1}} to="https://www.linkedin.com/company/beatest/"><FontAwesomeIcon icon={faLinkedinIn} style={{background: "#007bb5",color: "white",width:'1em',height:'1em'}}/></Link>
                    <Link to="/" style={{marginRight:'3%',color: 'inherit',opacity:1}} to="https://www.facebook.com/beatest.in/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faFacebookF}   style={{background: "#3B5998",color: "white",width:'1em',height:'1em'}}/></Link>
                </Row>
                <Row style={{paddingTop:'2%',paddingLeft  :'4%',color:'#fff',alignItems: 'center'}}>
                    <img alt="Beatest Logo" src="/img/beatest.png" style={{height: '2em',marginRight: '3%'}}/>
                    <Link to="/" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>@2018Beatest India Pvt Ltd.</Link>
                    <Link to="/terms" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Privacy Policy</Link>

                </Row>

            </Container>
        </Container>
    )

}


export {Footer}
