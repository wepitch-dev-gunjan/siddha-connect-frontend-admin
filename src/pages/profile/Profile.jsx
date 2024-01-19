import "./profile.scss";
import { useContext, useState } from "react";
import BasicInfo from "../../components/basicInfo";
import { ProfileContext } from "../../context/ProfileContext";
import { backend_url } from "../../config";
import axios from "axios";
import { handleInput } from "../../utilities";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const [initialUserProfileBackup, setInitialUserProfileBackup] =
    useState(profile);
  const { editProfileEnable, setEditProfileEnable } =
    useContext(ProfileContext);


  // Function to handle saving changes
  const handleSave = async () => {
    try {
      const endpointUrl = `${backend_url}/admin/${user._id}`; // Replace with your actual endpoint URL

      const { data } = await axios.put(endpointUrl, profile, {
        headers: {
          Authorization: user.token
        }
      });
      setProfile(data);
      setInitialUserProfileBackup(data);
      setEditProfileEnable(false);
      toast('Profile successfully saved');
    } catch (error) {
      toast(error.message)
      console.error("Error while saving:", error);
    }
  };

  // Function to handle cancelling changes
  const handleCancel = () => {
    setProfile(initialUserProfileBackup);
    setEditProfileEnable(false);
  };

  return (
    <div className="Profile-container">
      <div className="profile-body">
        <div className="edit-profile">
          <div
            className="edit-profile-button"
            onClick={() => setEditProfileEnable(true)}
          >
            Edit profile
          </div>
        </div>
        <br />

        <div className="profile-info">
          <div className="top">
            {editProfileEnable ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInput("name", e.target.value, setProfile)}
              />
            ) : (
              <h1>{profile.name}</h1>
            )}
          </div>
          <div className="middle">
            <BasicInfo
              profile={profile}
              editProfileEnable={editProfileEnable}
              setProfile={setProfile}
            />
          </div>
          <div className="bottom">
            {editProfileEnable && (
              <div className="buttons">
                <div className="edit-profile-button" onClick={handleSave}>
                  Save
                </div>
                <div className="edit-profile-button" onClick={handleCancel}>
                  Cancel
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
