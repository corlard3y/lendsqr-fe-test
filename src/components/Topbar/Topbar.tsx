import type { FC } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";
import { BsBell, BsFillCaretDownFill } from "react-icons/bs";

import LendsqrLogo from '../../assets/illustrations/LendsqrLogo.svg';
import './Topbar.scss';

type Props = {
  toggleSidebar: () => void;
};

export const Topbar: FC<Props> = ({ toggleSidebar }) => {
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


        <div className='user-name'>
          <div className='avatar'></div>
          <p>Adedeji</p>
          <BsFillCaretDownFill />
        </div>

        <FaBars
          className='bars-icon'
          onClick={toggleSidebar}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};
