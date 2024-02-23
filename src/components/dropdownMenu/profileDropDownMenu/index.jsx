import React, { useContext, useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import "./style.scss";
import useClickOutside from "../../../customHooks/useClickOutside";
import PersonIcon from "@mui/icons-material/Person";
import { AiOutlineLogout } from "react-icons/ai";
import DropDownMenuButton from "../dropDownMenuButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const ProfileDropDownMenu = ({ name, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useContext(UserContext)
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('R');
  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const avatarFormatter = (username) => {
    let avatar = '';
    if (typeof username === 'string' && username.trim() !== '') {
      const arr = username.split(' ');

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
          avatar += arr[i][0].toUpperCase();
        }
      }
    } else {
      // Handle the case where username is not a valid string
      console.error('Invalid username:', username);
    }

    return avatar;
  }


  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  useEffect(() => {
    setAvatar(avatarFormatter(name))
  }, [user])

  return (
    <div className="ProfileDropDownMenu-container" onClick={toggleDropdown}>
      <div className="left">
        {/* avatar */}
        <div>
          <span>
            {avatar}
          </span>
        </div>
      </div>
      <div className="mid">
        <p className="top">Hello</p>
        <h4>{name}</h4>
      </div>
      <div className="right">
        <BiChevronDown />
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef} className="dropdown-menu">
          <DropDownMenuButton
            onClick={() => navigate("/profile")}
            icon={PersonIcon}
            text="Profile"
          />
          {/* {smallScreen && (
            <DropDownMenuButton
              onClick={() => ""}
              icon={MdOutlineSummarize}
              text="Summary"
            />
          )} */}
          <DropDownMenuButton
            onClick={()=> navigate("/")}
            icon={AiOutlineLogout}
            text="Log out"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileDropDownMenu;
