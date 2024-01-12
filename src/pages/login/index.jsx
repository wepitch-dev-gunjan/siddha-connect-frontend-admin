import './style.scss'
import Logo from '../../assets/logo.svg'
import { useRef, useState } from 'react';
import { backend_url } from '../../config';
import axios from 'axios';
import DropDownMenu from '../../components/dropDownMenu';
const Login = () => {
  const selectRoleRef = useRef(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignup] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

    const handleSignUp = () => {
      setSignup(true);
    };

    const handleForgetPassword = () => {
      setForgetPassword(true);
    };

    const handleBack = () => {
      setSignup(false);
      setForgetPassword(false)
    };
  
    return (
      <div className='Login-container'>
        <div className="login-main-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-inside-container">
            {!forgetPassword && !signup && (
              <input type="text" placeholder='Username' />
            )}
              <input type="text" placeholder="Email" />
            
            <input type="text" placeholder="Enter new Password" />
  
            {forgetPassword && (
              <input type="text" placeholder="Confirm new Password" />
            )}
  
            {!signup && !forgetPassword && (
              <select>
                <option value="" disabled defaultValue>Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
            )}
  
            {!forgetPassword && !signup && (
              <div className="forgot-password">
                <p onClick={handleForgetPassword}>Forgot Password?</p>
              </div>
            )}
  
            <div className="buttons">
              {forgetPassword && (
                <>
                  <button>Set Password</button>
                  <button onClick={handleBack}>Cancel</button>
                </>
              )}
  
              {!signup && !forgetPassword && (
                <>
                  <button>Login</button>
                  <button onClick={handleSignUp}>Sign Up</button>
                </>
              )}
  
              {signup && (
                <>
                  <button onClick={handleBack}>Cancel</button>
                  <button>Signup</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Login;