import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { backend_url } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [forgotPasswordEnable, setForgotPasswordEnable] = useState(false);
  const { user } = useContext(UserContext);
  const [signUpEnable, setSignUpEnable] = useState(false);
  const [code, setCode] = useState(""); // This will be used for employee or dealer code
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // Role: employee or dealer
  const [roles, setRoles] = useState([{ value: "employee", label: "Employee" }, { value: "dealer", label: "Dealer" }]);
  const [roleError, setRoleError] = useState(null);
  const [codeError, setCodeError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      // Validate input fields
      if (!selectedRole) {
        setRoleError("Role is required");
        return;
      }
      if (!code) {
        setCodeError("Code is required");
        return;
      }
      if (!password) {
        setPasswordError("Password is required");
        return;
      }

      // Make login API request
      const { data } = await axios.post(`${backend_url}/login`, {
        role: selectedRole, // employee or dealer
        code, // either employee code or dealerCode
        password
      });

      toast(data.message);
      localStorage.setItem("token", data.token);
      navigate("/"); // Redirect to dashboard after login
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
      console.log(error);
    }
  };

  const setForgotPassword = async () => {
    setForgotPasswordEnable(true);
    try {
      const { data } = await axios.post(`${backend_url}/user/forgotPassword`, { email: code });
      toast("Email sent successfully");
    } catch (error) {
      toast("Error sending reset email");
      console.log(error);
    }
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setRoleError(null); // Clear role error on selection
  };

  return (
    <div className="container">
      <div className="Login-container">
        <div className="img">
          <img src={Logo} alt="siddha-connect" />
        </div>

        <div className="login-inputs">
          <>
            {!forgotPasswordEnable && (
              <>
                {/* Role selection dropdown */}
                <Box sx={{ minWidth: 120, backgroundColor: "rgba(217, 217, 217, 0.20)" }}>
                  <FormControl fullWidth>
                    <InputLabel>Role</InputLabel>
                    <Select
                      id="role"
                      label="Role"
                      name="role"
                      value={selectedRole}
                      onChange={handleRoleChange}
                      error={!!roleError}
                    >
                      {roles.map((role, i) => (
                        <MenuItem key={i} value={role.value}>
                          {role.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                {roleError && <p className="error-text">{roleError}</p>}

                {/* Code input (either employee code or dealer code based on role) */}
                <TextField
                  id="code"
                  label={selectedRole === "employee" ? "Employee Code" : "Dealer Code"}
                  name="code"
                  variant="outlined"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setCodeError(null);
                  }}
                  onBlur={() => !code && setCodeError("Code is required.")}
                  error={!!codeError}
                  helperText={codeError}
                  InputProps={{
                    style: {
                      borderColor: "rgba(255, 255, 255, 0.8) !important",
                      background: "rgba(217, 217, 217, 0.20)",
                      color: "#fff",
                    },
                    focused: {
                      color: "#fff",
                    },
                  }}
                />

                {/* Password input */}
                <TextField
                  id="password"
                  label="Password"
                  name="password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(null);
                  }}
                  onBlur={() => !password && setPasswordError("Password is required.")}
                  error={!!passwordError}
                  helperText={passwordError}
                  InputProps={{
                    style: {
                      borderColor: "rgba(255, 255, 255, 0.8) !important",
                      background: "rgba(217, 217, 217, 0.20)",
                      color: "#fff",
                    },
                    focused: {
                      color: "#fff",
                    },
                  }}
                />

                {/* Forgot Password link */}
                <p onClick={setForgotPassword}>Forgot Password?</p>
              </>
            )}

            {/* Login button */}
            <div className="buttons">
              <button className="Google-login-button" onClick={login}>Login</button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Login;
