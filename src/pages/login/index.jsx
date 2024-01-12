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

  const handleLogin = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/login`, {
        params: {
          username,
          password
        }
      })
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user);
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignUp = () => {
    setSignup(true);
  };

  const [menuItems, setMenuItems] = useState([
    {
      item: 'Admin',
      onClick: () => {
        console.log('Admin clicked')
      }
    },
    {
      item: 'TSE',
      onClick: () => {
        console.log('TSE clicked')
      }
    },
    {
      item: 'ASE',
      onClick: () => {
        console.log('ASE clicked')
      }
    },
    {
      item: 'BH',
      onClick: () => {
        console.log('BH clicked')
      }
    },
  ])

  const dropDownMenuStyle = {
    container: {
      width: '380px',

    }
  }


  return (
    <div className='Login-container'>
      <div className="login-main-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="login-inside-container">
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='User Name' />
          <input type="text" placeholder="Email" />
          <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
          {/* <input type="text" /> */}
          {!signup ? (
            <div ref={selectRoleRef} className="login-drop-down">
              <div className="drop-down-button">
                Select Role
              </div>
              <DropDownMenu
                menuItems={menuItems}
                style={{
                  container: {
                    // width: '388px',
                  },
                }}
                clickableRef={selectRoleRef}
              />
            </div>
          ) : (
            <input type="text" placeholder="Additional Field for Signup" />
          )}
          <div className="buttons">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignUp}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;