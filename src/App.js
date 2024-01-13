import * as React from "react";
import "./style.scss";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import Notifications from "./components/notifications";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { NotificationContext } from "./context/NotificationContext";
import useClickOutside from "./customHooks/useClickOutside";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "./components/breadcrumb";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { isLoggedIn } = user;

  const { notificationsEnable, setNotificationsEnable, notificationsRef } =
    useContext(NotificationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({ ...user, isLoggedIn: false });
    navigate("/login");
  };

  useClickOutside(notificationsRef, () => {
    setNotificationsEnable(false);
  });
  return (
    <div>
      {isLoggedIn && <Header handleLogout={handleLogout} />}

      <div className="main">
        <ToastContainer />
        {notificationsEnable && <Notifications />}

        {isLoggedIn && <Sidebar />}
        <div className={`${isLoggedIn && "main-content"}`}>
          {isLoggedIn && (
            <div className="breadcrumb-main">
              <Breadcrumb />
            </div>
          )}
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/login" element={<Navigate replace to="/" />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Dashboard />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Login />} />
                <Route path="/password-reset" element={<Login />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
