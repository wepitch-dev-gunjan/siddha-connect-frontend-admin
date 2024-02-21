import React,{useEffect, useState} from 'react';
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField } from "@mui/material";
import axios from 'axios';
import { backend_url } from '../../config';
const ResetPassword = () => {
  const [ token, setToken ] = useState('')
  const [ newPassword ,setNewPassword ] = useState('')
  const [ confirmNewPassword ,setConfirmNewPassword ] = useState('')

  const resetPassword = async () => {
    try {
      const {data} = await axios.post(`${backend_url}/user/resetPassword`, {
        newPassword, confirmNewPassword
      }, {
        params: {
          token
        }
      })
      console.log(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const token = searchParams.get('token');
    setToken(token)
  }, [])
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
              <button  onClick={resetPassword} className="Google-login-button">Confirm</button>
            </div>
    </div>
    </div>
    </div>
 )
}
export default ResetPassword