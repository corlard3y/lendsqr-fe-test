import { Link, useParams } from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'

import { ArrowLeftIcon } from '../../assets/icons'
import { Tabs } from '../../shared/Tabs';
import { GetUsers } from '../../queries';


import './UserDetails.scss'
import { useState } from 'react';
import GeneralDetails from './GeneralDetails';
import type { UserDetails } from '../../types/users';
import { formatCurrency } from '../../utils/formatCurrency';

export default function UserDetailsComponents() {
  const [activeTab, setActiveTab] = useState('general');
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: users, isLoading, isError } = GetUsers();
  const currentUser = (users as UserDetails[])?.find(
    (user: UserDetails) => user.id === numericId
  );

  if (isLoading) return <p>Loading users...</p>;
  if (isError || !users) return <p>Error loading users.</p>;

  const tabData = [
    { id: 'general', label: 'General Details', content: <GeneralDetails currentUser={currentUser} /> },
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
              <div className='name'>{ currentUser?.fullName}</div>
              <div className='id'>{ currentUser?.id }</div>
            </div>
          </div>

          <div className='user-ratings'>
            <div className='ratings-title'>User’s Tier</div>
            <div className="stars">
              {[1, 2, 3].map((i) =>
                currentUser && i <= currentUser?.tier ? (
                  <FaStar key={i} className="star filled" />
                ) : (
                  <FaRegStar key={i} className="star" />
                )
              )}
            </div>
          </div>

          <div className='user-balance'>
            <div className="balance-title">{formatCurrency(currentUser?.accountBalance || '₦0')}</div>
            <div className='user-account'>{currentUser?.accountNumber} / { currentUser?.bankName }</div>
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
