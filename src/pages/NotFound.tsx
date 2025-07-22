import { Link } from 'react-router-dom'
import '../App.scss'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>

      <Link to="/">Go back to home</Link>
    </div>
  )
}

export default NotFound
