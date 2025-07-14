import LendsqrLogo from '../../assets/illustrations/LendsqrLogo.svg'
import LendsqrLoginImage from '../../assets/illustrations/LendsqrLoginImage.webp'
import './Login.scss'

export default function LoginComponent() {
  return (
    <div className='login-wrapper'>
      <div className='image-wrapper'>
        <img src={LendsqrLogo} className='login-logo' alt="Lendsqr Logo" />
        <img src={LendsqrLoginImage} className='login-image' alt='Lendsqr Login Image' />
      </div>

      <div className="form-wrapper">
        <div>
          <h2>Welcome!</h2>
          <span>Enter details to login.</span>
        </div>

        <form className="form">
          <div className="input-group">
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" id="password" placeholder="Password" />
          </div>

          <p>Forgot PASSWORD?</p>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  )
}
