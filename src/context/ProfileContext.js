import { createContext, useContext, useEffect, useState } from 'react';
import { AdminContext } from './AdminContext';
import axios from 'axios';
import { backend_url } from '../config';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { admin } = useContext(AdminContext);
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${backend_url}/admin/${admin._id}`,
        {
          headers: {
            Authorization: admin.token
          }
        });
      setProfile(response.data[0])
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  useEffect(() => {
    if (admin && admin.isLoggedIn)
      fetchProfile();
  }, [admin]);

  const [editProfileEnable, setEditProfileEnable] = useState(false)
  const [profilePicEditMode, setProfilePicEditMode] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        profilePicEditMode,
        profile,
        setProfile,
        setProfilePicEditMode,
        setEditProfileEnable,
        editProfileEnable,
        fetchProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
