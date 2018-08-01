import React from 'react'
import NavBar from 'Layout/NavBarLogoOnly/NavBarLogoOnly'
import LoginForm from './LoginForm/LoginFormContainer'


function LoginPage(props) {

    return (<div>


            <div className="main-container">

                <NavBar/>

                <section className="space--xs imageblock switchable feature-large ">
                    <div className="imageblock__content col-lg-5 col-md-5 pos-right">

                        <div className="background-image-holder  hidden-xs" style={{
                            background: "url(/img/inner-7.jpg)",
                            "background-position": "initial",
                            "opacity": 1,
                            "height": "100vh"
                        }}>

                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-7">

                                <h2>Create a Stack account</h2> <span>Dont Have an account? Get lost</span>
                                <br/>
                                <hr className="short"/>

                                <LoginForm/>

                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    )

}

export default LoginPage;