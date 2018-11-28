import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import config from "config"
import PropTypes from 'prop-types';
import Reaptcha from 'reaptcha';


const schema = yup.object().shape({

    password: yup.string().min(6).max(9).required(),
    confirmPassword: yup.string().test('password-match', 'Passwords do not Match', function (value) {
        let {password} = this.parent;
        return password === value;

    }),
});


/**
 * The only true button.
 *
 * @version 1.0.1
 * @author [Artem Sapegin](https://github.com/sapegin)
 * @author [Andy Krings-Stern](https://github.com/ankri)
 */
function ResetPasswordForm(props) {

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
                    <Label className="text-danger text-left">{touched.password && errors.password }</Label>

                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />

                    <Label className="text-danger text-left">{touched.confirmPassword && errors.confirmPassword }</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
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

ResetPasswordForm.propTypes = {
    /** Boolean indicating whether the button should render as disabled */
    disabled: PropTypes.bool,
    /** button label. */
    label: PropTypes.string.isRequired,
    /** onClick handler */
    onClick: PropTypes.func,
    /** component styles */
    style: PropTypes.shape,
};

ResetPasswordForm.defaultProps = {
    disabled: false,
    onClick: () => {
    },
    style: {},
};

export {ResetPasswordForm};
