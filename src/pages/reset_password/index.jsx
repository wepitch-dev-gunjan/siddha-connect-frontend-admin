import React,{useState} from 'react';
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField } from "@mui/material";
const ResetPassword = () => {
 const [newPassword, setNewPassword] = useState("");
 const [confirmNewPassword, setConfirmNewPassword] = useState("");
 return(
  <div className="container">
  <div className="Reset-container">
    <div className="img">
      <img src={Logo} alt="siddha-connect" />
    </div>
    <div className="reset-inputs">

              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
           
              />
              <TextField
                id="outlined-basic"
                label="Confirm New Password"
                variant="outlined"
                value={confirmNewPassword}
                onChange = {(e) => setConfirmNewPassword(e.target.value)}
               
              />
                <div className="buttons">
              <button className="Google-login-button">Confirm</button>
            </div>
    </div>
    </div>
    </div>
 )
}
export default ResetPassword