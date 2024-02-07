import React, { useState } from "react";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField } from "@mui/material";

const Login = () => {
  const [forgotPasswordEnable, setForgotPasswordEnable] = useState(false);
  const [signUpEnable, setSignUpEnable] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const setSignUp = () => {
    setSignUpEnable(true);
  };

  const setForgotPassword = () => {
    setForgotPasswordEnable(true);
  };

  const validateSignUpFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email id is required.");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!password) {
      setPasswordError("Email id is required.");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    if (!newPassword) {
      setPasswordError("New Password is required.");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    return isValid;
  };

  // const getOtp = async () => {
  //   try {
  //     const { data } = await axios.post(`${backend_url}/auth/sendOTPPhone`, {
  //       phone_number: phone,
  //     });
  //     toast(data.message);
  //   } catch (error) {
  //     console.log(error);
  //     toast("Error sending otp");
  //   }
  // };

  // const verifyOtp = async () => {
  //   try {
  //     const { data } = await axios.post(`${backend_url}/auth/verifyOTPPhone`, {
  //       phone_number: phone,
  //       otp,
  //     });
  //     toast(data.message);
  //     localStorage.setItem("token", data.token);
  //     setUser((prev) => ({
  //       ...prev,
  //       token: data.token,
  //     }));
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     toast("OTP Verification failed");
  //   }
  // };

  // const handleOtpClick = () => {
  //   setSendOtpEnable(true);
  //   getOtp();
  // };

  // const handleVerifyOtp = () => {
  //   setSendOtpEnable(true);
  //   verifyOtp();
  // };

  return (
    <div className="container">
      <div className="Login-container">
        <div className="img">
          <img src={Logo} alt="siddha-connect" />
        </div>

        <div className="login-inputs">
          <>
            {signUpEnable && (
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(null);
                }}
                onBlur={() =>
                  !password && setPasswordError("Password is required.")
                }
                error={!!passwordError}
                helperText={passwordError}
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
            )}

            {!forgotPasswordEnable && (
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                onBlur={() => !email && setEmailError("Email id is required.")}
                error={!!emailError}
                helperText={emailError}
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
            )}

            {forgotPasswordEnable && (
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                onBlur={() =>
                  !password && setPasswordError("New Password is required.")
                }
                error={!!passwordError}
                helperText={passwordError}
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
            )}

            {forgotPasswordEnable && (
              <TextField
                id="outlined-basic"
                label="Confirm New Password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                onBlur={() =>
                  !password && setPasswordError("New Password is required.")
                }
                error={!!passwordError}
                helperText={passwordError}
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
            )}

            {!forgotPasswordEnable && (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(null);
                }}
                onBlur={() =>
                  !password && setPasswordError("Password is required.")
                }
                error={!!passwordError}
                helperText={passwordError}
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
            )}

            {!forgotPasswordEnable && !signUpEnable && (
              <p onClick={setForgotPassword}>Forgot Password?</p>
            )}
          </>

          {!forgotPasswordEnable && !signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button">Login</button>
            </div>
          )}

          {forgotPasswordEnable && !signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button">Reset Password</button>
            </div>
          )}

          {signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button">Sign Up</button>
            </div>
          )}

          {!forgotPasswordEnable && !signUpEnable && (
            <span>
              Don't have an account?
              <p onClick={setSignUp}>Sign Up</p>
            </span>
          )}
          {!forgotPasswordEnable && !signUpEnable && (
            <span>
              Don't have an account?
              <p onClick={setSignUp}>Sign Up</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
