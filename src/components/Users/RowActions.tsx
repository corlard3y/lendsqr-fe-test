import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './Users.scss';
import { EyeIcon, UserCancelIcon, UserMarkIcon } from '../../assets/icons';

export const RowActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="row-actions">
      <BsThreeDotsVertical className="dots" onClick={() => setOpen(prev => !prev)} />

      {open && (
        <ul className="dropdown">
          <li><img src={EyeIcon} />View Details</li>
          <li><img src={UserCancelIcon} />Blacklist User</li>
          <li><img src={UserMarkIcon} />Activate User</li>
        </ul>
      )}
    </div>
  );
};
