import React from 'react';
import  {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const Loginformik = () => {
    const initialCredentials={
        email:'',
        password:''
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema = {loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credential', values)
                }}
            >

                { props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur                    
                    } = props

                    return (
                        <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {
                            errors.email && touched.email && 
                            (
                                <div className='error'>
                                    <p>{errors.email}</p>
                                </div>
                            )
                        }

                <label htmlFor='password'>Password</label>
                <Field
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                />
                 {
                            errors.password && touched.password && 
                            (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }

                <button type="submit">Login</button>
                {isSubmitting ? <p>Login yoy credentials</p>:null}

            </Form>
                    )
                }}

            

            </Formik>
        </div>
    );
}

export default Loginformik;
