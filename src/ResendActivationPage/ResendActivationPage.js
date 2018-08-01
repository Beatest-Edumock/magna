import React from 'react'
import NavBar from 'Layout/NavBarLogoOnly/NavBarLogoOnly'
import ResendActivationForm from './ResendActivationForm/ResendActivationForm'

function ResendActivationPage(props) {

    return (
        <div className="main-container ">
            <NavBar/>
            <section className="text-center height-100">

                <div className="background-image-holder" style={{
                    background: "url(/img/hero-1.jpg)",
                    "background-position": "initial",
                    "opacity": 1,
                    "height": "100vh"
                }}>

                </div>

                <div className="container pos-vertical-center">
                    <ResendActivationForm/>

                    <span className="type--fine-print text-light">
                        I have read and agree to the
                        <a href="#"> Terms &amp; Conditions</a>
                    </span>

                </div>
            </section>

        </div>
    );

}

export default ResendActivationPage;