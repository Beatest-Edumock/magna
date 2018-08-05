import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Recaptcha from 'react-recaptcha';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import config from 'config';


const schema = yup.object().shape({

    email: yup.string().email().required(),
    password: yup.string().min(6).max(9).required(),
    confirmPassword: yup.string().test('password-match', 'Passwords do not Match', function (value) {
        let {password} = this.parent;
        return password === value;

    }),
    recaptcha: yup.string().required("You must complete the recaptcha"),
    phoneNo: yup.number("Invalid Phone Number")
        .lessThan(10000000000, "Invalid Phone number, must be 10 digits")
        .moreThan(999999999, "Invalid Phone number, must be 10 digits")
        .required("Phone number is required"),

    college: yup.string().nullable().test('college-match', "Please Select a College", function (value) {
        return value !== "unselected";

    })
});


function SignUpForm(props) {


    return (<Formik

        initialValues={{info: '', email: '', password: '', confirmPassword: '', phoneNo: '', college: "unselected", recaptcha: null}}

        validationSchema={schema}

        onSubmit={props.onSubmitCallback}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (

            <Form onSubmit={handleSubmit}>

                <Label className="text-danger">{errors.info}</Label>

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

                    <Label className="text-danger text-left">{touched.password && errors.password && errors.password}</Label>

                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />

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

                    <Input type="select"
                           name="college"
                           value={values.college}
                           onChange={handleChange}
                           onBlur={handleBlur}>

                        <option value="unselected" disabled selected>Select your College</option>

                        <option value={null}>Other/Not Listed</option>
                        {props.colleges.map((cur) => <option value={cur.id}>{cur.college_name}</option>)}

                    </Input>
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
                    <Label className="text-danger text-left">{touched.recaptcha && errors.recaptcha && errors.recaptcha}</Label>
                </FormGroup>
                <FormGroup>

                    <Button color="primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>

                </FormGroup>

            </Form>

        )}
    />);

}


export {SignUpForm};
