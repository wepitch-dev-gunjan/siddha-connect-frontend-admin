import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { handleInput } from "../../utilities";

const BasicInfo = ({ profile, editProfileEnable, setProfile }) => {
  const handleDateChange = (date) => {
    setProfile((prev) => ({
      ...prev,
      date_of_birth: formatDate(date),
    }));
  };

  const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD');
  };

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
                <input
                  type="text"
                  value={profile.role}
                  onChange={(e) => handleInput("role", e.target.value, setProfile)}
                />
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
