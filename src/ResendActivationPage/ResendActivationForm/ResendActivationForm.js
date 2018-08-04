import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ResendActivationMailApi} from '_Api/User'
import {toast} from 'react-toastify'
import {history} from "../../__internals/CustomHistory";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import Recaptcha from "react-recaptcha";


const schema = yup.object().shape({

    email: yup.string().email("Email is not valid").required(),
    recaptcha: yup.string().required("You must complete the recaptcha")
});

let recaptchaInstance;

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
                recaptchaInstance.reset();
                setSubmitting(false);

            });


        }}

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
                        ref={e => recaptchaInstance = e}
                        sitekey="6LfJGVMUAAAAAJJtME41Fh4D_sQUAcIJSKqSLwAN"
                        render="explicit"
                        theme="light"
                        type="invisible"

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
};


export default ResendActivationForm;
