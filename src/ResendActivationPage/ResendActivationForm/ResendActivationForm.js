import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import config from "config"
import PropTypes from 'prop-types';
import Reaptcha from 'reaptcha';


const schema = yup.object().shape({

    email: yup.string().email("Email is not valid").required(),
    recaptcha: yup.string().required("You must complete the recaptcha")
});


/**
 * The only true button.
 *
 * @version 1.0.1
 * @author [Artem Sapegin](https://github.com/sapegin)
 * @author [Andy Krings-Stern](https://github.com/ankri)
 */
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
                    <Reaptcha
                        ref={props.registerRecaptchaInstanceCallback}
                        sitekey={config.recaptchaKey}
                        theme="light"

                        onVerify={(response) => {
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

ResendActivationForm.propTypes = {
    /** Boolean indicating whether the button should render as disabled */
    disabled: PropTypes.bool,
    /** button label. */
    label: PropTypes.string.isRequired,
    /** onClick handler */
    onClick: PropTypes.func,
    /** component styles */
    style: PropTypes.shape,
};

ResendActivationForm.defaultProps = {
    disabled: false,
    onClick: () => {
    },
    style: {},
};

export {ResendActivationForm};
