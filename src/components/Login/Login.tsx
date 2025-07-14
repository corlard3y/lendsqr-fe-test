import LendsqrLogo from '../../assets/illustrations/LendsqrLogo.svg'
import './Login.scss'

export default function LoginComponent() {
  return (
    <div className='login-wrapper'>
      <div className='image-wrapper'>
        <img src={LendsqrLogo} alt="Lendsqr Logo" />
      </div>
      <div className="form-wrapper">
        <div>
          <h2>Welcome</h2>
          <span>Enter details to login.</span>
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  )
}
