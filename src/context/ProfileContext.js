import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../config";
import { UserContext } from "./UserContext";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(
        `${backend_url}/user/profile`,
        // null,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      console.log(data);
      setProfile(data);
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  useEffect(() => {
    if (user && user.isLoggedIn) fetchProfile();
  }, [user]);

  const [editProfileEnable, setEditProfileEnable] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        setEditProfileEnable,
        editProfileEnable,
        fetchProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
