// external components
import { FiSearch } from 'react-icons/fi';
import { BsBell, BsFillCaretDownFill } from "react-icons/bs";

// internal components
import LendsqrLogo from '../../assets/illustrations/LendsqrLogo.svg'
import './Topbar.scss';


export const Topbar = () => {
  return (
    <div className="topbar">
        <img src={LendsqrLogo} className='topbar-lopo' alt="Lendsqr Logo" />

      <div className="search-bar">
        <input type="text" placeholder="Search for anything" />
        <button type="button">
          <FiSearch size={18} />
        </button>
      </div>


      <div className="user-info">
        <a href="#">Docs</a>

        <BsBell className='bell-icon' />

        <div style={{ width: '45px', height: '45px', backgroundColor: 'red', borderRadius: '100%' }}></div>

        <div className='user-name'>
          <p>Adedeji</p>
          <BsFillCaretDownFill />
        </div>
      </div>
    </div>
  );
};
