import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import { handleInput } from "../../utilities";
import DropDown from "../dropDown";

const BasicInfo = ({ profile, editProfileEnable, setProfile }) => {

  const handleRoleChange = role => setProfile(prev => ({ ...prev, role }))
  return (
    <div className="BasicInfo-container">
      <div className="heading">
        <h2>Basic info</h2>
      </div>
      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Phone no.</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="number"
                  value={profile.phone_number}
                  onChange={(e) => handleInput("phone_number", e.target.value, setProfile)}
                />
              ) : (
                <p>{profile.phone_number}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Role</p>
            </div>
            <div className="info-value">

              {editProfileEnable ? (
                <DropDown handleRoleChange={handleRoleChange} />
              ) : (
                <p>{profile.role}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BasicInfo;
