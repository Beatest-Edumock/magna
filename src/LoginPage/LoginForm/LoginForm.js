import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {LoginUserApi} from '_Api/User'
import {toast} from 'react-toastify'
import {history} from "../../__internals/CustomHistory";
import {Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';


const schema = yup.object().shape({

    email: yup.string().email().required(),
    password: yup.string().min(6).max(9).required()
});


function LoginForm(props) {

    return (<Formik

        initialValues={{email: '', password: '', info: ''}}

        validationSchema={schema}

        onSubmit={(values, {setSubmitting, setErrors}) => {

            LoginUserApi(values.email, values.password).then(({data}) => {

                props.addUserAction(data);
                toast.success(`Welcome ${data.full_name}`);
                history.push("/");

            }).catch(({response}) => {
                setErrors({info: response.data.message});
            }).then(() => {
                setSubmitting(false);
            });


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


export {LoginForm};
