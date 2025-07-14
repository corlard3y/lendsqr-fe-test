import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import LendsqrLogo from '../../assets/illustrations/LendsqrLogo.svg'
import LendsqrLoginImage from '../../assets/illustrations/LendsqrLoginImage.webp'
import './Login.scss'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
})

export default function LoginComponent() {
  const handleSubmit = async (values: { email: string; password: string }) => {
    // const res = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // })
    // const data = await res.json()
    // console.log(data)
    console.log(values, 'values')
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
              <ErrorMessage name="email" component="small" className="error" className='error' />
            </div>

            <div className="input-group">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="small" className="error" className='error' />
            </div>

            <p>Forgot PASSWORD?</p>
            <button type="submit">Log in</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
