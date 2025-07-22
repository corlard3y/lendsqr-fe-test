// external components
import { NavLink, useNavigate } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";

// internal components
import { BriefcaseIcon, SignoutIcon } from '../../assets/icons';
import { sidebarItems } from '../../constants/sidebar';
import './Sidebar.scss'



export const Sidebar = () => {
  const navigate = useNavigate();

   const handleLogout = () => {
     sessionStorage.removeItem('isAuthenticated');
     navigate('/');
   };

  return (
    <div className="sidebar">
      <NavLink to={'/'} className="outer-link">
         <img src={BriefcaseIcon} alt={'Log out'} className='icon' />
        <span>Switch Organization</span>
        <FaChevronDown className='chevron-icon' />
      </NavLink>

      {sidebarItems.map((item, idx) => (
        <div key={idx} className="sidebar-section">
          {item.path && item.path !== '/#' ? (
            <NavLink to={item.path} className="sidebar-link">
              <img src={item.icon} alt={item.title} className="icon" />
              <span>{item.title}</span>
            </NavLink>
          ) : (
            <p className="sidebar-heading">{item.title.toUpperCase()}</p>
          )}

          {item.children?.map((child, i) => {
            const isDisabled = child.path === '/#';
            return isDisabled ? (
              <div className="sidebar-link disabled-link" key={i}>
                <img src={child.icon} alt={child.title} className="icon" />
                <span>{child.title}</span>
              </div>
            ) : (
              <NavLink to={child.path} className="sidebar-link" key={i}>
                <img src={child.icon} alt={child.title} className="icon" />
                <span>{child.title}</span>
              </NavLink>
            );
          })}
        </div>
      ))}

      <div onClick={ handleLogout } className="outer-link">
         <img src={SignoutIcon} alt={'Log out'} className='icon' />
        <span>Logout</span>
      </div>

      <div className='version-number'>v1.2.0</div>
    </div>
  )
}
