import { Link, useNavigate } from 'react-router-dom';
import './style.scss'
import { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';

const VerifyProfilePopup = () => {
  const { setEditProfileEnable } = useContext(ProfileContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/profile');
    setEditProfileEnable(true)
  }
  return (
    <div className='VerifyProfilePopup-container'
      onClick={handleClick}
    >
      Complete your profile to get verified!
    </div>
  );
};

export default VerifyProfilePopup;