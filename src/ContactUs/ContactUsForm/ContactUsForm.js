import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import Recaptcha from "react-recaptcha";
import config from "config"


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    recaptcha: yup.string().required("You must complete the recaptcha")
});


function ContactUsForm(props) {

    return (<Formik

        initialValues={{name: '', email: '', message: '',recaptcha: ''}}

        validationSchema={schema}

        onSubmit={props.onSubmitCallback}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (


            <Form onSubmit={handleSubmit}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <Label>Your name:</Label>
                        <Input
                            style={{width: '70%'}}
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <Label className="text-danger text-left">{touched.name && errors.name && errors.name}</Label>
                    </div>
                    <div style={{flex: 1}}>
                        <Label>Email Address:</Label>
                        <Input
                            style={{width: '70%'}}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <Label className="text-danger text-left">{touched.email && errors.email && errors.email}</Label>
                    </div>
                </div>
                <div style={{flex: 1,marginTop: 0}}>
                    <Label>Message:</Label>
                    <Input
                        style={{width: '80%'}}
                        type="textarea"
                        name="message"
                        placeholder="Enter message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    <Label className="text-danger text-left">{touched.message && errors.message && errors.message}</Label>
                </div>
                <div style={{marginTop: 0}}>
                    <Recaptcha
                        sitekey={config.recaptchaKey}
                        render="explicit"
                        theme="light"
                        verifyCallback={(response) => {
                            setFieldValue("recaptcha", response);
                        }}
                    />
                </div>
                <Label className="text-danger text-left">{touched.recaptcha && errors.recaptcha && errors.recaptcha}</Label>
                <Button style={{marginTop: 16}} color="primary" type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>


        )}
    />)
}


export {ContactUsForm};
