import './style.scss'
const Login = () => {
  return (
    <div className='Login-container'>
      <div className="login-main-container">
        <div className="login-inside-container">
          <input type="text" placeholder='User Name' />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" />
          <div className="buttons">
            <button>Login</button>
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;