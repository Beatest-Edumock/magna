import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Footer} from '../Layout/Footer/Footer';
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";


function TermsPage() {
    return (
        <div>
        <div>
            <NavBarWithButtonsContainer/>
        </div>
        <Container>
            <Row style={{marginTop: '5%'}}>
                <h1 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 300}}>Terms & Conditions</h1>
            </Row>
                <hr style={{borderColor: '#ececec'}}/>
            <Row style={{marginTop: '2%'}}>
                <h3 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 300}}>Privacy Policy &amp; General Conditions</h3>
            </Row>
            <Row style={{marginTop: '2%'}}>
                <p style={{color: '#666',fontSize: 14,lineHeight: '1.8em',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}><Link to="/">www.beatest.in</Link> is owned and operated by BEATEST EDUMOCK PRIVATE LIMITED. All rights of this website are reserved with Beatest. No part or content of this website may be reproduced, replicated, distributed or transmitted in any form whatsoever or through any means, which includes printing, recording or other electronic methods or any other methods, as the case may be, without prior written permission from the administrator of this website. Users may download material from the website only for their own personal, non-commercial use. For commercial permission requests, please contact the Web administrator. Beatest reserves the right to make changes to any information contained on the website at any time whatsoever, and without notice or limitation of any kind, including, but not limited to, information relating to courses, fees, and other related service. We are very sensitive to the privacy concerns of visitors to our website. Beatest is committed to respect your online privacy and recognize your need for appropriate protection and management of any personally identifiable information or private communication. We take care that the content posted on this website is appropriate for their viewing and/or use. This Privacy Policy outlines the way in which Beatest gathers and uses information relating to you. The information displayed on this site is provided on a 'best efforts' and 'as is' basis without any warranties of any kind, including, but not limited to any implied warranties of merchantability or fitness for any particular purpose. The users of 
                <Link to="/"> www.beatest.in</Link> claim the entire responsibility for the selection and use of the service(s) and neither Beatest nor any of its information providers, licensers, employees, partners or agents shall have any liability for any errors, malfunctions, defects, loss of data, resulting from the use or inability to use the service. In no event shall the liability of Beatest, if any, exceed the amount paid, if any, by the user. While utmost care is taken to provide correct and up to date information, Beatest does not warrant the accuracy, completeness and timely availability of the information provided on the site and accepts no responsibility or liability for any error or omission in any information provided on the site nor does the site claim to be comprehensive in its coverage of examinations (either competitive or otherwise in nature) and/or of the various educational programmes conducted in India. This website may contain information about various academic programs offered by institutes and/or institutions as well as about various examinations that are conducted by them or by independent parties/third parties in India. This information has been compiled from various sources, including primary research conducted by, or on behalf of Beatest as well as secondary or desk research. Beatest will in no event be liable for any direct, incidental, consequential or indirect damages arising out of the use of or inability to use and/or for any delay in the service provided by the site. THE INFORMATION AVAILABLE ON THIS SITE IS FOR GENERAL INFORMATION PURPOSES. Beatest expressly disclaims any warranties whether express or implied about the suitability, reliability, availability, timeliness, correctness, completeness, quality, continuity, performance, fitness of products, services contained displayed within this website for any purpose.</p>
            </Row>
            <Row style={{marginTop: '2%'}}>
                <h3 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 300}}>Payment & Refund Policy:</h3>
            </Row>
            <Row style={{marginTop: '2%'}}>
                <p style={{color: '#666',fontSize: 14,lineHeight: '1.8em',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Following policy is applicable for all the products /services that are bought and/or paid for on <Link to="/">www.beatest.in</Link> . This policy is applicable ONLY for products/services purchased online on <Link to="/">www.beatest.in</Link>.
                <br/><br/>1.The fees should be paid in full to avail the product/service
                <br/><br/>2. Any revision in the course fees /subscription fees / any other fees will be at the discretion of Beatest and shall be updated on the website time to time.
                <br/><br/>3.Fees paid for a specific programme are not transferable to any other programme.
                <br/><br/>4.Fees once paid shall not be refunded in any circumstances.
                <br/><br/>5.Fees once paid shall not be adjusted with any other product /service availed subsequently at any Beatest centre.
                <br/><br/>6.Courseware, content and Fees may be changed at the discretion of Beatest.
                <br/><br/>All the communication in this regard should be addressed to hello@beatest.in
                <br/><br/>
                <br/><br/>
                </p>
                
            </Row>
        </Container>
        <Footer />
        </div>

    )
}


export {TermsPage};


