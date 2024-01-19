import React, { useContext, useState } from "react";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField } from "@mui/material";
import Otp from "../../components/otp";
import { toast } from "react-toastify";
import { backend_url } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [sendOtpEnable, setSendOtpEnable] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [otp, setOtp] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
        otp,
      });
      toast(data.message);
      localStorage.setItem("token", data.token);
      setUser((prev) => ({
        ...prev,
        token: data.token,
      }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast("OTP Verification failed");
    }
  };

  const handleOtpClick = () => {
    setSendOtpEnable(true);
    getOtp();
  };

  const handleVerifyOtp = () => {
    setSendOtpEnable(true);
    verifyOtp();
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
              <Otp otp={otp} setOtp={setOtp} />
            </div>
          )}

          {!sendOtpEnable && (
            <div className="buttons">
              <button className="Google-login-button" onClick={handleOtpClick}>
                Send OTP
              </button>
            </div>
          )}
          {sendOtpEnable && (
            <div className="buttons">
              <button className="Google-login-button" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
