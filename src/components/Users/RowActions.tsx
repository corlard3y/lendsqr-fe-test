import { useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './Users.scss';
import { EyeIcon, UserCancelIcon, UserMarkIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';

type RowActionsProps = {
  id: number;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export const RowActions = ({ open, onToggle, onClose, id }: RowActionsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div className="row-actions" ref={ref}>
      <BsThreeDotsVertical className="dots" onClick={onToggle} />

      {open && (
        <ul className="dropdown">
          <li>
            <Link to={`/user-details/${id}`}>
            <img src={EyeIcon} />View Details
            </Link></li>
          <li><img src={UserCancelIcon} />Blacklist User</li>
          <li><img src={UserMarkIcon} />Activate User</li>
        </ul>
      )}
    </div>
  );
};
