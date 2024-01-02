import "./style.scss";
import { useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";
import Profile from "./pages/profile/Profile";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Notifications from "./components/notifications";
import { NotificationContext } from "./context/NotificationContext";
import { useRef } from "react";
import useClickOutside from "./customHooks/useClickOutside";
import { ToastContainer } from "react-toastify";
import { ProfileContext } from "./context/ProfileContext";
import AddProfilePic from "./components/profilePic/addProfilePic";

function App() {
  const addProfilePicRef = useRef(null);
  const { admin, setAdmin } = useContext(AdminContext);
  const { profilePicEditMode, setProfilePicEditMode } =
    useContext(ProfileContext);

  const { notificationsEnable, setNotificationsEnable, notificationsRef } =
    useContext(NotificationContext);
  const { isLoggedIn } = admin;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setAdmin({ ...admin, isLoggedIn: false });
    navigate("/login");
  };

  useClickOutside(addProfilePicRef, () => {
    setProfilePicEditMode((prev) => !prev);
  });

  useClickOutside(notificationsRef, () => {
    setNotificationsEnable(false);
  });

  return (
    <div>
      {profilePicEditMode && (
        <div className="add-profile-pic-panel">
          <AddProfilePic ref={addProfilePicRef} />
        </div>
      )}

      {isLoggedIn && <Header handleLogout={handleLogout} />}
      <div className="main">
        <ToastContainer />

        {notificationsEnable && <Notifications />}

        {isLoggedIn && <Sidebar />}
        <div className={`${isLoggedIn && "main-content"}`}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Navigate replace to="/" />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Navigate replace to="/login" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
