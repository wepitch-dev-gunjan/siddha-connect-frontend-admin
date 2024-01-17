import React, { useState } from "react";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField } from "@mui/material";
import OtpInput from "otp-input-react";
import Otp from "../../components/otp";
import { toast } from "react-toastify";
import { backend_url } from "../../config";
import axios from "axios";

const Login = () => {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [signUpEnable, setSignUpEnable] = useState(false);
  const [sendOtpEnable, setSendOtpEnable] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);

  const validateSignUpFields = () => {
    let isValid = true;

    if (!phone) {
      setPhoneError("Phone no. is required.");
      isValid = false;
    } else {
      setPhoneError(null);
    }

    return isValid;
  };

  const getOtp = async () => {
    try {
      const { data } = await axios.post(`${backend_url}/auth/sendOTPPhone`, {
        phone_number: phone,
      });
      toast(data.message);
    } catch (error) {
      console.log(error);
      toast("Error sending otp");
    }
  };

  const verifyOtp = async () => {
    try {
      const { data } = await axios.post(`${backend_url}/auth/verifyOTPPhone`, {
        phone_number: phone,
        otp: data.otp,
      });
      toast(data.message);
    } catch (error) {
      console.log(error);
      toast("Error sending otp");
    }
  };

  const handleOtpClick = () => {
    setSendOtpEnable(true);
    getOtp();
  };

  const handleVerifyOtp = () => {
    setSendOtpEnable(true);
    getOtp();
  };

  return (
    <div className="container">
      <div className="Login-container">
        <div className="img">
          <img src={Logo} alt="siddha-connect" />
        </div>

        <div className="login-inputs">
          {!sendOtpEnable && (
            <>
              <TextField
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(null);
                }}
                onBlur={() => !phone && setPhoneError("Phone no. is required.")}
                error={!!phoneError}
                helperText={phoneError}
                InputProps={{
                  style: {
                    borderColor: "rgba(255, 255, 255, 0.8) !important",
                    background: "rgba(217, 217, 217, 0.20)", // Remove the semicolon at the end
                    color: "#fff",
                  },
                  focused: {
                    color: "#fff",
                  },
                }}
              />
            </>
          )}

          {sendOtpEnable && <div className="otp-head">Enter Otp</div>}

          {sendOtpEnable && (
            <div className="otp">
              <Otp />
            </div>
          )}

          {!signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button" onClick={handleOtpClick}>
                Send OTP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
