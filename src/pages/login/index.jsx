import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { Box, FormControl, InputLabel, MenuItem,  Select,  TextField } from "@mui/material";
import { CheckPicker, Stack } from "rsuite";
import { UserContext } from "../../context/UserContext";
import {toast} from "react-toastify";
import { backend_url } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [forgotPasswordEnable, setForgotPasswordEnable] = useState(false);
  const {user}=useContext(UserContext)
  const [signUpEnable, setSignUpEnable] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [selectedRole, setSelectedRole] = useState({});
  const [roles, setRoles] = useState([])
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);
  const [roleError, setRoleError] = useState(null);
  const [parents, setParents] = useState([]);
  const [parentsError,setParentsError]=useState(null)
  const navigate = useNavigate();

  useEffect(()=>{
    const getRoles = async () => {
      try {
        const { data } = await axios.get(`${backend_url}/role`);
        console.log(data)
        setRoles(data)
      } catch (error) {
        console.log(error)
        toast('error fetching roles')
      }
    }
    getRoles()
  },[user])
  
    const registerUser = async () => {
      try {
        let payload = {name: username,email, password, role: selectedRole, parents}
        console.log(payload);
      const { data } = await axios.post(`${backend_url}/user/register`,payload);
          console.log(data);
          toast('User registered successfully');
          navigate("/login")
      } catch (error) {
        console.log(error);  
      }
    }
  
    const loginUser = async ()=>{
      try {
        const payload ={email,password}
        const {data}= await axios.post(`${backend_url}/login`,payload)
        console.log(data);
        toast('Logged in successfully')
        navigate("/")
      } catch (error) {
        console.log(error);
        
      }
    }


  const data = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
    "Louisa",
    "Lester",
    "Lola",
    "Lydia",
    "Hal",
    "Hannah",
    "Harriet",
    "Hattie",
    "Hazel",
    "Hilda",
  ].map((item) => ({ label: item, value: item }));

  const login = async () => {
    try{
      const { data } = await axios.post(`${backend_url}/login`,{
        email, password
      })

      toast(data.message)
      localStorage.setItem('token', data.token);
      // toast('User Logged in Successfully')
      // navigate('/dashboard')
    }catch(error){
      console.log(error)
    }
  } 

  const setSignUp = () => {
    setSignUpEnable(true);
  };

  
    
    const setForgotPassword =async ()=> {
      setForgotPasswordEnable(true);
      try {
        const {data} = await axios.post(`${backend_url}/user/forgotPassword`)
        console.log(data);
        toast('Email sent Successfully')
        
      } catch (error) {
        console.log(error);
        
      }
    }
  

  const validateSignUpFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email id is required.");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!username) {
      setUserNameError("User name id is required.");
      isValid = false;
    } else {
      setUserNameError(null);
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
  

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setRoleError(false);
    console.log(event.target.value)
  };


  const addParents = (newParents) => {
    setParents((prevParents) => {
      newParents.forEach((newParent) => {
        if (!prevParents.includes(newParent)) {
          prevParents.push(newParent);
        }
      });
      return prevParents;
    });  
    console.log(parents);
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
                id="username"
                label="Username"
                name="username"
                variant="outlined"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setUserNameError(null);
                }}
                onBlur={() =>
                  !username && setUserNameError("User name is required.")
                }
                error={!!userNameError}
                helperText={userNameError}
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
             {signUpEnable && (
                <div className="checkpicker"> 

                 <CheckPicker 
                 data={data}
                  id="patents"
                  name="parents"
                  value={parents}
                  onChange={addParents}
                  onBlur={()=> !parents && setParentsError ("Parent is Required")}
                  error={!!parentsError}
                  helperText={parentsError}
                  style={{ width: 324,color: "black"}} 
                  appearance="subtle"  />
                </div>
              )}
           
           {signUpEnable && (
                <Box sx={{ minWidth: 120,backgroundColor:"rgba(217, 217, 217, 0.20)" }}>
                <FormControl fullWidth>
                  <InputLabel >Role</InputLabel>
                  <Select
                    id="role"
                    label="Role"
                    name="role"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    onBlur={() =>
                      !selectedRole && setRoleError("Role is required.")
                    }
                    error={!!roleError}
                helperText={roleError}
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
                  >
                    {roles.map((role, i)=>(
                    <MenuItem key={i} value={role}>{role.name}</MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Box>

              )}
             

               {/* {signUpEnable && (
                <Box sx={{ minWidth: 120,backgroundColor:"rgba(217, 217, 217, 0.20)" }}>
                <FormControl fullWidth>
                  <InputLabel >parentss</InputLabel>
                  <Select
                    id="parents"
                    label="parents"
                    name="parents"
                    value={parents}
                    onChange={handleparentsChange}
                    onBlur={() =>
                      !parents && setparentsError("parents is required.")
                    }
                    error={!!parentsError}
                helperText={parentsError}
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
                  >
                    {roles.map((role, i)=>(
                    <MenuItem key={i} value={role.name}>{role.name}</MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Box> */}

              {/* )} */}

            {!forgotPasswordEnable && (
              <TextField
                id="email"
                label="Email"
                name="email"
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

            {/* {forgotPasswordEnable && (
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
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
                value={confirmNewPassword}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
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
            )} */}

            {!forgotPasswordEnable && (
              <TextField
                id="password"
                label="Password"
                name="password"
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
              <p onClick={setForgotPassword} >Forgot Password?</p>
            )}
          </>

          {!forgotPasswordEnable && !signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button" onClick={loginUser}>Login</button>
            </div>
          )}

          {forgotPasswordEnable && !signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button">Reset Password</button>
            </div>
          )}

          {signUpEnable && (
            <div className="buttons">
              <button className="Google-login-button" onClick={registerUser}>Sign Up</button>
            </div>
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
