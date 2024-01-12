import './style.scss'
import Logo from '../../assets/logo.svg'
import { useState } from 'react';
const Login = () => {

  const [signup, setSignup] = useState(false);

    const handleSignUp = () => {
      setSignup(true);
    };
  
  return (
    <div className='Login-container'>
      <div className="login-main-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="login-inside-container">
          <input type="text" placeholder='User Name' />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          {/* <input type="text" /> */}
          {!signup ? (
            <select>
              <option value="" disabled defaultValue>Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          ) : (
            <input type="text" placeholder="Additional Field for Signup" />
          )}
          <div className="buttons">
            <button>Login</button>
            <button onClick={handleSignUp}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;