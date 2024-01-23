import React, { useContext } from 'react'
import './style.scss'
import { ProfileContext } from '../../context/ProfileContext';
import BasicInfo from '../../components/basicInfo';

const EmployeeProfile = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <div className="EmployeeProfile-container">
        <div className="name">
            <h2>{profile.name}</h2>
        </div>
        <div className="profile-info">
        <BasicInfo
              profile={profile}
              setProfile={setProfile}
            />
        </div>
    </div>
  )
}

export default EmployeeProfile
