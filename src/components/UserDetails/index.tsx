import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'

import { ArrowLeftIcon } from '../../assets/icons'
import { Tabs } from '../../shared/Tabs';

import './UserDetails.scss'
import { useState } from 'react';
import GeneralDetails from './GeneralDetails';

export default function UserDetailsComponents() {
  const [activeTab, setActiveTab] = useState('general');

  const tabData = [
    { id: 'general', label: 'General Details', content: <GeneralDetails /> },
    { id: 'documents', label: 'Documents', content: <div>Documents Content</div> },
    { id: 'bank', label: 'Bank Details', content: <div>Bank Details Content</div> },
  ];

  const currentContent = tabData.find(tab => tab.id === activeTab)?.content;

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

        <div className='tab-panel'>
          <Tabs
            tabs={tabData}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
        </div>

      <div className='tab-content'>{ currentContent }</div>

      </div>
  )
}
