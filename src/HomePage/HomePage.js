import React from "react";
import Typed from 'react-typed';
import NavBarContainer from '../Layout/NavBar/NavBarContainer'
import 'react-toastify/dist/ReactToastify.css';


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


function callToAction() {
    /**
     * The giant call to action with a background image and a button
     *
     */

    return (

        <div className="main-container">
            <a id="testing-text-1" className="in-page-link"/>

            <section className="cover height-100 imagebg text-center" data-overlay={3}>

                <div className="background-image-holder" style={{
                    background: "url(/img/landing-1.jpg)",
                    "backgroundPosition": "initial",
                    "opacity": 1
                }}>
                </div>
                <div className="container pos-vertical-center">


                    <div className="row">
                        <div className="col-md-12">
                            <h1>{typedString()}</h1>
                            <a className="btn btn--primary type--uppercase" href="#"> <span className="btn__text"> View The Demos </span> </a>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}


function HomePage() {
    return (
        <div>

            <NavBarContainer isLoggedIn={false}/>
            {callToAction()}

        </div>
    )
}


export default HomePage;


