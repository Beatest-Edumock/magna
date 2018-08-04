import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {LoginUserApi} from '_Api/User'
import {toast} from 'react-toastify'
import {history} from "../../__internals/CustomHistory";
import {Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';


const schema = yup.object().shape({

    email: yup.string().email().required(),
    password: yup.string().min(6).max(9).required(),
    confirmPassword: yup.string().test('password-match', 'Passwords do not Match', function (value) {
        let {password} = this.parent;
        return password === value;

    }),
    phoneNo: yup.number("Invalid Phone Number")
        .lessThan(10000000000, "Invalid Phone number, must be 10 digits")
        .moreThan(999999999, "Invalid Phone number, must be 10 digits")
        .required("Phone number is required")

});


class SignUpForm extends React.Component {

    constructor() {
        super()

    }

    componentDidMount() {

    }

    render() {
        return (<Formik

            initialValues={{info: '', email: '', password: '', confirmPassword: '', phoneNo: '', collegeId: null,}}

            validationSchema={schema}

            onSubmit={(values, {setSubmitting, setErrors}) => {


            }}

            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (

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


                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name="carlist" form="carform">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>

                        <Button color="primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>

                    </FormGroup>

                </Form>

            )}
        />)
    };

}


export {SignUpForm};
