import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ResendActivationMailApi} from '_Api/User'
import {toast} from 'react-toastify'
import {history} from "../../__internals/CustomHistory";
import Recaptcha from "react-recaptcha";


const schema = yup.object().shape({

    email: yup.string().email("Email is not valid").required(),
    recaptcha: yup.string().required("You must complete the recaptcha")
});


function ResendActivationForm() {

    return (<Formik

        initialValues={{email: '', recaptcha: '', info: ''}}

        validationSchema={schema}

        onSubmit={(values, {setSubmitting, setErrors}) => {

            ResendActivationMailApi(values.email, values.recaptcha).then(() => {
                toast.success("Email Successfully Resent!");
                history.push("/login");

            }).catch(({response}) => {
                setErrors({info: response.data.message});
                setSubmitting(false);
            });


        }}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (

            <form onSubmit={handleSubmit}>

                <div className="col-12 color--error">{errors.info}</div>


                <div className="row">

                    <div className="col-8 ">

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>


                    <button className="btn btn--primary col-4 " type="submit" disabled={isSubmitting}>
                        Resend Activation Email
                    </button>

                    {touched.email && errors.email && <div className="col-12 color--error">{errors.email}</div>}

                </div>


                <div className={"col-8"}>

                    <Recaptcha
                        sitekey="6LfJGVMUAAAAAJJtME41Fh4D_sQUAcIJSKqSLwAN"
                        render="explicit"
                        theme="light"

                        verifyCallback={(response) => {
                            setFieldValue("recaptcha", response);

                        }}
                        onloadCallback={() => {

                        }}
                    />
                    {touched.recaptcha && errors.recaptcha && <div className="col-4 color--error">{errors.recaptcha}</div>}

                </div>


            </form>

        )}
    />)
};


export default ResendActivationForm;
