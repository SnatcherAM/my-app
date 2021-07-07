import React from 'react';
import logo from './../../logo.svg'
import './signup.css'
import { Formik, Field, Form } from 'formik';

const Signup = () => (
  <div class="page">
    <div class="wrapper">
    <h1 class="title">Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="First Name" />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Last Name" />
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="Email"
          type="email"/>
          <button class="btn-next" type="submit">Next<img class="btn__img" src="https://img.icons8.com/ios-filled/50/ffffff/long-arrow-right.png"/></button>
          <Field
             type="password"
             name="password"
             placeholder="Your Password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
        </Form>
       )}
      </Formik>
      <div class="registered">Already have an account? <a class="login" href="#">Log in.</a></div>
    </div>
    </div>
  );

  export default Signup;