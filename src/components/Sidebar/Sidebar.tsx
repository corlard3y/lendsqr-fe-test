// external components
import { NavLink } from 'react-router-dom'

// internal components
import { sidebarItems } from '../../constants/sidebar';
import './Sidebar.scss'



export const Sidebar = () => {

  return (
    <div className="sidebar">
      {sidebarItems.map((item, idx) => (
        <div key={idx} className="sidebar-section">
          {item.icon && item.path ? (
            <NavLink to={item.path} className="sidebar-link">
              <img src={item.icon} alt={item.title}  className='icon'/>
              <span>{item.title}</span>
            </NavLink>
          ) : (
            <p className="sidebar-heading">{item.title.toUpperCase()}</p>
          )}

          {item.children?.map((child, i) => (
            <NavLink to={child.path} className="sidebar-link"  key={i}>
               <img src={child.icon} alt={child.title} className='icon' />
              <span>{child.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  )
}
