import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import PropTypes from 'prop-types'


const schema = yup.object().shape({

    code: yup.string().min(5).max(8).required()
});


function PlacementsForm(props) {

    return (<Formik

        initialValues={{email: '', password: '', info: ''}}

        validationSchema={schema}

        onSubmit={props.onSubmitCallback}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (

            <Form onSubmit={handleSubmit}>

                <Label className="text-danger">{errors.info}</Label>

                <FormGroup>
                    <Label className="text-danger text-left">{touched.text && errors.text && errors.text}</Label>

                    <Input
                        type="text"
                        name="code"
                        placeholder="Enter College Code"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />

                </FormGroup>

                <FormGroup style={{textAlign: 'center'}}>
                    <Button  color="primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>

                </FormGroup>

            </Form>

        )}
    />);
}

PlacementsForm.propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
};

PlacementsForm.defaultProps = {
  shouldAutoDirect: true,
  
};

export {PlacementsForm};
