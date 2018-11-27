import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import Reaptcha from 'reaptcha'
import config from 'config';
import Select from 'react-select';


const schema = yup.object().shape({

    fullName: yup.string("Full Name")
        .min(2, " Must be at least 2 characters long")
        .max(15, " Must be at most 10 characters")
        .required("Full Name is required"),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(9).required(),
    confirmPassword: yup.string().test('password-match', 'Passwords do not Match', function (value) {
        let {password} = this.parent;
        return password === value;

    }),

    phoneNo: yup.number("Invalid Phone Number")
        .lessThan(10000000000, "Invalid Phone number, must be 10 digits")
        .moreThan(999999999, "Invalid Phone number, must be 10 digits")
        .required("Phone number is required"),

    college: yup.object().required("Please select a college")

});

const filterConfig = (candidate, input) => {

    if (candidate.label.toLowerCase().indexOf(input) >= 0) {
        return true;
    }

    if (candidate.value === null) {
        return true;
    }


};

const hintStyle = {color: 'white', fontSize: '10px'};


function SignUpForm(props) {


    return (<Formik

        initialValues={{info: '', email: '', password: '', confirmPassword: '', phoneNo: '', college: "", recaptcha: "", fullName: ""}}

        validationSchema={schema}

        onSubmit={props.onSubmitCallback}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (

            <Form onSubmit={handleSubmit}>

                <Label className="text-danger">{errors.info}</Label>

                <FormGroup>
                    <Label className="text-danger text-left">{touched.fullName && errors.fullName && errors.fullName}</Label>

                    <Input
                        type="string"
                        name="fullName"
                        placeholder="Enter full name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                    />
                    <Label className="text-danger text-left">{touched.email && errors.email && errors.email}</Label>

                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />

                    <Label className="text-danger text-left">{touched.password && errors.password && errors.password}</Label>

                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <label style={hintStyle}>Password should be between 6-15 characters</label>

                    <Label className="text-danger text-left">{touched.confirmPassword && errors.confirmPassword && errors.confirmPassword}</Label>

                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                    />


                    <Label className="text-danger text-left">{touched.phoneNo && errors.phoneNo && errors.phoneNo}</Label>

                    <Input
                        type="tel"
                        name="phoneNo"
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNo}
                    />


                    <Label className="text-danger text-left">{touched.college && errors.college && errors.college}</Label>

                    <Select
                        id="color"
                        options={props.colleges.map(cur => {
                            return {value: cur.id, label: cur.college_name}
                        })}
                        multi={false}
                        onChange={(val) => {
                            setFieldValue('college', val)
                        }}
                        placeholder="Select a College"
                        onBlur={handleBlur}
                        value={values.college}
                        filterOption={filterConfig}

                    />

                </FormGroup>

                <FormGroup>
                    <Reaptcha

                        ref={props.registerRecaptchaInstanceCallback}

                        sitekey={config.recaptchaKey}
                        theme="light"
                        size='invisible'

                        onVerify={(response) => {
                            props.captchaVerifiedCallback(response);
                        }}
                    />
                    <Label className="text-danger text-left">{touched.recaptcha && errors.recaptcha && errors.recaptcha}</Label>
                </FormGroup>
                <FormGroup>

                    <Button color="primary" type="submit" disabled={isSubmitting}>
                        Create Account
                    </Button>

                </FormGroup>
            </Form>

        )}
    />);

}


export {SignUpForm};
