import React from 'react';
import {User} from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const Registerformik = () => {

    let user = new User();

    const initialValues ={
        username: '',
        email:'',
        password: '',
        confirm:'',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username must be short')
                .max(12, 'Username too long')
                .required('Email is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.lenght > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Passwords must match'
                    ) 
                }).required('You must confirm the password')
        }
    )

    const submit = (values)=>{
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema = {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

            {({ values,
                touched,
                isSubmitting,
                errors,
                handleChange,
                handleBlur}) => (

                    <Form>
                        <label htmlFor="username">User name</label>
                        <Field id="username" type="text" name="username" placeholder="Your username" />
                            {
                                errors.username && touched.username && 
                                (
                                    <div className='error'>
                                        <ErrorMessage name="username" component='div'></ErrorMessage>
                                    </div>
                                )
                            }
                        
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {
                                errors.email && touched.email && 
                                (
                                    <div className='error'>
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                    </div>
                                )
                            }    

                        <label htmlFor='password'>Password</label>
                        <Field id="password" name="password" placeholder="password" type="password"/>
                            {
                                errors.password && touched.password && 
                                (
                                    <div className='error'>
                                    <ErrorMessage name="password" component='div'></ErrorMessage>

                                    </div>
                                )
                            }

                        <label htmlFor='confirm'>Password</label>
                        <Field id="confirm" name="confirm" placeholder="confirm password" type="password"/>
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <div className='error'>
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>

                                    </div>
                                )
                            }    

                        <button type="submit">Register Account</button>
                        {isSubmitting ? <p>Sending your credentials...</p>:null}    

                    </Form>

                )}

            </Formik>
        </div>
    );
}

export default Registerformik;
