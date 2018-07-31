import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {LoginUser} from '_Api/User'
import {toast} from 'react-toastify'
import history from '__internals/CustomHistory'


const schema = yup.object().shape({

    email: yup.string().email().required(),
    password: yup.string().min(6).max(9).required()
});


function loginForm(props) {

    return (<Formik

        initialValues={{email: '', password: '', info: ''}}

        validationSchema={schema}

        onSubmit={(values, {setSubmitting, setErrors}) => {

            LoginUser(values.email, values.password).then(({data}) => {

                props.addUserAction(data);
                toast.success(`Welcome ${data.full_name}`);
                history.push("/");

            }).catch(({response}) => {
                setErrors({info: response.data.message});
            });

            setSubmitting(false);


        }}

        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (

            <form onSubmit={handleSubmit}>

                <div className="row row--gapless">
                    <div class="col-12 color--error">{errors.info}</div>
                    <div className={"col-12"}>

                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>
                    {touched.email && errors.email && <div class="col-12 color--error">{errors.email}</div>}

                    <div className={"col-12"}>

                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>

                    {touched.password && errors.password && <div class="col-12 color--error">{errors.password}</div>}

                    <div className="col-12">
                        <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>

                </div>
            </form>

        )}
    />);
}


export default loginForm;
