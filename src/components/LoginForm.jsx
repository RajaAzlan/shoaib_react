import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { EyeFill } from 'react-bootstrap-icons';
import formStyles from '@/assets/scss/layout/_form.module.scss';
import buttonStyles from '@/assets/scss/components/_buttons.module.scss';

function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid Format')
      .required('Email Required'),
    password: Yup.string().required('Password Required'),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form className={`mt-0 ${formStyles.customForm}`}>
          <div className="position-relative mb-5">
            <Field
              type="email"
              name="email"
              className={`border-0 position-relative w-100 ${
                values.email !== '' ? `${formStyles.active}` : ''
              }`}
            />
            <label htmlFor="" className={`mb-0 ${formStyles.placeholderLabel}`}>
              Email Address
            </label>
            <ErrorMessage
              name="email"
              component="div"
              className={`mb-0 pt-2 ${formStyles.invalidMessage}`}
            />
          </div>
          <div className="position-relative mb-5">
            <Field
              type="password"
              name="password"
              className={`border-0 position-relative w-100 input-icon ${
                values.password !== '' ? `${formStyles.active}` : ''
              }`}
            />
            <label htmlFor="" className={`mb-0 ${formStyles.placeholderLabel}`}>
              password
            </label>

            <button
              className={`btn p-0 position-absolute rounded-circle ${formStyles.inputBtn}`}
            >
              <EyeFill />
            </button>
            <ErrorMessage
              name="password"
              component="div"
              className={`mb-0 pt-2 ${formStyles.invalidMessage}`}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`btn btn-dark text-center w-100 mt-2 py-2 ${buttonStyles.btn}`}
            >
              LOGIN
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
