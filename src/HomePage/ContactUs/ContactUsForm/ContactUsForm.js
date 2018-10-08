import React from 'react';
import {Formik} from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {Button, Col, Form, Input, Label, Row} from 'reactstrap';
import config from '../../../config';
import Reaptcha from 'reaptcha';



const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    recaptcha: yup.string().required("You must complete the recaptcha")
});


/**
 * The component takes in name,email and message as input and submits it as a form to the backend in order to record the message. */


function ContactUsForm(props) {

    return (<Formik

        initialValues={{name: '', email: '', message: '', recaptcha: ''}}

        validationSchema={schema}

        onSubmit={props.onSubmitCallback}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (


            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Label>Your name:</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <Label className="text-danger text-left">{touched.name && errors.name && errors.name}</Label>
                    </Col>
                    <Col>
                        <Label>Email Address:</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <Label className="text-danger text-left">{touched.email && errors.email && errors.email}</Label>
                    </Col>
                </Row>
                <Row>
                    <Col md="10" lg="12">
                        <Label>Message:</Label>
                        <Input
                            style={{width: '100%'}}
                            type="textarea"
                            name="message"
                            placeholder="Enter message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        <Label className="text-danger text-left">{touched.message && errors.message && errors.message}</Label>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Reaptcha
                            ref={props.registerRecaptchaInstanceCallback}
                            sitekey={config.recaptchaKey}
                            theme="light"
                            
                            onVerify={(response) => {
                                console.log("verification done");
                                setFieldValue("recaptcha", response);
                            }}
                        />
                    </Col>
                    <Label className="text-danger text-left">{touched.recaptcha && errors.recaptcha && errors.recaptcha}</Label>
                    <Col>
                    </Col>
                </Row>
                <Button style={{marginTop: 16}} color="primary" type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>


        )}
    />)
}


export {ContactUsForm};

ContactUsForm.propTypes = {

    /** The function used to access the captcha component in order to reset it */
    registerRecaptchaInstanceCallback: PropTypes.func,

    /** The function to be executed on submitting form */
    onSubmitCallback: PropTypes.func,

};