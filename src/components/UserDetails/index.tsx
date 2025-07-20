import { Link } from 'react-router-dom'
import './UserDetails.scss'
import { ArrowLeftIcon } from '../../assets/icons'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function UserDetailsComponents() {
  return (
      <div>
        <Link to="/users" className='back-link'><img src={ArrowLeftIcon} alt="Back" />Back to Users</Link>

        <div className='title-details'>
          <h2>Users Details</h2>

          <button className='blacklist'>
            Blacklist User
          </button>

          <button className='activate'>
            Activate User
          </button>
        </div>

        <div className='user-details-tab'>
        <div className="user-details-section">
          <div className='avatar-section'>
            <div style={{width: '100px', height: '100px', borderRadius:'100%', background:'blue'}}></div>

            <div className='avi-details'>
              <div className='name'>Grace Effiom</div>
              <div className='id'>LSQFf587g90</div>
            </div>
          </div>

          <div className='user-ratings'>
            <div className='ratings-title'>User’s Tier</div>
            <div className='stars'>
                {[1, 2, 3].map(i => (
                  <FaStar key={i} className="star filled" />
                ))}
                {[4, 5].map(i => (
                  <FaRegStar key={i} className="star" />
                ))}
              </div>
          </div>

          <div className='user-balance'>
            <div className='balance-title'>₦200,000.00</div>
            <div className='user-account'>9912345678/Providus Bank</div>
          </div>
        </div>

        <div>tabs</div>
        </div>

      </div>
  )
}
