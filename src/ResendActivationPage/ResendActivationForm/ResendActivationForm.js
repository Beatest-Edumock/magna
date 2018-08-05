import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import Recaptcha from "react-recaptcha";
import config from "config"


const schema = yup.object().shape({

    email: yup.string().email("Email is not valid").required(),
    recaptcha: yup.string().required("You must complete the recaptcha")
});


function ResendActivationForm(props) {

    return (<Formik

        initialValues={{email: '', recaptcha: '', info: ''}}

        validationSchema={schema}

        onSubmit={props.onSubmitCallback}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (


            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label className="text-danger">{errors.info}</Label>
                </FormGroup>

                <FormGroup>
                    <Label className="text-danger text-left">{touched.email && errors.email && errors.email}</Label>

                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />

                    <Label className="text-danger text-left">{touched.recaptcha && errors.recaptcha && errors.recaptcha}</Label>

                </FormGroup>

                <FormGroup>
                    <Recaptcha
                        ref={props.registerRecaptchaInstanceCallback}

                        sitekey={config.recaptchaKey}
                        render="explicit"
                        theme="light"

                        verifyCallback={(response) => {
                            setFieldValue("recaptcha", response);
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Button color="primary" type="submit" disabled={isSubmitting}>
                        Resend Activation Mail
                    </Button>
                </FormGroup>


            </Form>


        )}
    />)
}


export {ResendActivationForm};
