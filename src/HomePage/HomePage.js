import React from "react";
import Typed from 'react-typed';
import {NavBarWithButtonsContainer} from "../Layout/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';

//
//
// function typedString() {
//     /**
//      * Returns the string in a type format , using typedjs
//      *
//      */
//     return (
//         <Typed
//             strings={
//                 ['Here you can find anything',
//                     "This is awesome",
//                     "brilliant"]
//             }
//             typeSpeed={40}
//             loop={true}
//         />
//     );
// }
//
//
// function callToAction() {
//     /**
//      * The giant call to action with a background image and a button
//      *
//      */
//
//     return (
//
//         <div className="main-container">
//             <a id="testing-text-1" className="in-page-link"/>
//
//             <section className="cover height-100 imagebg text-center" data-overlay={3}>
//
//                 <div className="background-image-holder" style={{
//                     background: "url(/img/landing-1.jpg)",
//                     "backgroundPosition": "initial",
//                     "opacity": 1
//                 }}>
//                 </div>
//                 <div className="container pos-vertical-center">
//
//
//                     <div className="row">
//                         <div className="col-md-12">
//                             <h1>{typedString()}</h1>
//                             <a className="btn btn--primary type--uppercase" href="#"> <span className="btn__text"> View The Demos </span> </a>
//                         </div>
//                     </div>
//
//
//                 </div>
//             </section>
//
//             <div className="main-container">
//                 <section className="text-center">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-8">
//                                 <div className="tabs-container" data-content-align="left">
//                                     <ul className="tabs">
//                                         <li className="active">
//                                             <div className="tab__title text-center"> <i className="icon icon--sm block icon-Target-Market" /> <span className="h5">Code Quality</span> </div>
//                                             <div className="tab__content">
//                                                 <p className="lead"> Stack follows the BEM naming convention that focusses on logical code readability that is reflected in both the HTML and CSS. Interactive elements such as accordions and tabs follow the same markup patterns making rapid development easier for developers and beginners alike. </p>
//                                                 <p className="lead"> Add to this the thoughtfully presented documentation, featuring code highlighting, snippets, class customizer explanation and you've got yourself one powerful value package. </p>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="tab__title text-center"> <i className="icon icon--sm block icon-Text-Effect" /> <span className="h5">Visual Design</span> </div>
//                                             <div className="tab__content">
//                                                 <p className="lead"> Stack offers a clean and contemporary look to suit a range of purposes from corporate, tech startup, marketing site to digital storefront. Elements have been designed to showcase content in a diverse yet consistent manner. </p>
//                                                 <p className="lead"> Multiple font and colour scheme options mean that dramatically altering the look of your site is just clicks away — Customizing your site in the included Variant Page Builder makes experimenting with styles and content arrangements dead simple. </p>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="tab__title text-center"> <i className="icon icon--sm block icon-Love-User" /> <span className="h5">Stack Experience</span> </div>
//                                             <div className="tab__content">
//                                                 <p className="lead"> Medium Rare is an elite author known for offering high-quality, high-value products backed by timely and personable support. Recognised and awarded by Envato on multiple occasions for producing consistently outstanding products, it's no wonder over 20,000 customers enjoy using Medium Rare templates. </p>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//
//
//
//         </div>
//
//
//
//
//
//
//
//
//
//     )
// }
//
//
function HomePage() {
    return (
        <div style={{width: "100%", height: "100%", position: 'absolute'}} className="bg-light">

            <div className="container-fluid ">

                <NavBarWithButtonsContainer/>


            </div>
        </div>
    )
}


export {HomePage};


