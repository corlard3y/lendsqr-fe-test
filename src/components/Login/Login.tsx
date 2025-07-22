// external components
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

//assets
import LendsqrLogo from '../../assets/illustrations/LendsqrLogo.svg'
import LendsqrLoginImage from '../../assets/illustrations/LendsqrLoginImage.webp'
import './Login.scss'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
})

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; password: string }) => {
    // any random email and password works since this is a test env
    if (values.email != '' && values.password != '') {
      sessionStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      // do nothing
    }
  }

  return (
    <div className='login-wrapper'>
      <div className='image-wrapper'>
        <img src={LendsqrLogo} className='login-logo' alt="Lendsqr Logo" />
        <img src={LendsqrLoginImage} className='login-image' alt='Lendsqr Login' />
      </div>

      <div className="form-wrapper">
        <div>
          <h2>Welcome!</h2>
          <span>Enter details to login.</span>
        </div>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div className="input-group">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="small" className="error" />
            </div>

            <div className="input-group password-group">
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <span
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </span>
              <ErrorMessage name="password" component="small" className="error" />
            </div>

            <p>Forgot PASSWORD?</p>
            <button type="submit">Log in</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
