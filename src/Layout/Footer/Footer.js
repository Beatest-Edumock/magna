import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faFacebookF, faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Container, Row} from 'reactstrap'
import {Link} from 'react-router-dom'

/**
 * The commoon footer Component containing links to the required pages.
 */

function Footer() {

    return (
        <Container fluid={true} style={{padding: 0}}>
            <Container fluid={true} style={{filter: 'brightness(80%)',height:200,backgroundColor: '#404040',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <Row style={{paddingTop:64,paddingBottom:8, paddingLeft  :'4%',color:'#fff'}}>
                    <Link to="/about-us" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Our Team</Link>
                    <Link to="/faq" style={{color: 'inherit',opacity:1,fontSize:14}}>FAQs</Link>
                    <Row style={{justifyContent: 'flex-end',width: '70%'}} >
                        <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://www.linkedin.com/company/beatest/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faLinkedinIn} style={{background: "#007bb5",color: "white",width:'1em',height:'1em'}}/></a>
                        <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://www.facebook.com/beatest.in/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faFacebookF}   style={{background: "#3B5998",color: "white",width:'1em',height:'1em'}}/></a>
                        <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://twitter.com/beatest_in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faTwitter}   style={{background: "#38A1F3",color: "white",width:'1em',height:'1em'}}/></a>
                        <a style={{marginRight:'3%',color: 'inherit',opacity:1}} href="https://instagram.com/beatest.in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"1x"} icon={faInstagram}   style={{background: "#BC2A8D",color: "white",width:'1em',height:'1em'}}/></a>

                    </Row>
                </Row>
                <Row style={{paddingTop:32,paddingLeft  :'4%',color:'#fff',alignItems: 'center'}}>
                    <img alt="Beatest Logo" src="/img/beatest.png" style={{height: '2em',marginRight: '3%'}}/>
                    <Link to="/" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>@2018Beatest India Pvt Ltd.</Link>
                    <Link to="/terms" style={{marginRight:'2%',color: 'inherit',opacity:1,fontSize:14}}>Privacy Policy</Link>

                </Row>

            </Container>
        </Container>
    )

}


export {Footer}
