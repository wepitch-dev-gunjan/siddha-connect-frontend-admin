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
import Location from "./components/location";
import FileUpload from "./pages/fileUpload";
import UploadHistory from "./pages/uploadHistory";
import TemplateManagement from "./pages/templateManagement";
import Tools from "./pages/tools";
import Role from "./pages/role";
import ViewRole from "./pages/viewRole";
import Analytics from "./pages/analytics";
import User from "./pages/user";
import EmployeeProfile from "./pages/employee-profile";
import Attendence from "./pages/attendence";
import PunchIn from "./components/punchIn";
import { AttendenceContext } from "./context/AttendenceContext";
// import reset Password
import ResetPassword from "./pages/reset_password";
// import AttendenceSummary from "./components/attendenceSummary";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { isLoggedIn } = user;
  const { punchInEnable, location, isPunchInEnable, setIsPunchInEnable } =
    useContext(AttendenceContext);
  // const isLoggedIn = true;

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
      {/* {!punchInEnable && <AttendenceSummary  setIsPunchInEnable={!isPunchInEnable} location={location} />} */}

      {punchInEnable && (
        <PunchIn
          location={location}
          isPunchInEnable={isPunchInEnable}
          setIsPunchInEnable={setIsPunchInEnable}
        />
      )}
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
          <div className="routes-container">
            <Routes>
              {isLoggedIn ? (
                <>
                  <Route path="/location" element={<Location />} />
                  <Route path="/login" element={<Navigate replace to="/" />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/file-upload" element={<FileUpload />} />
                  <Route path="/upload-history" element={<UploadHistory />} />
                  <Route path="/template" element={<TemplateManagement />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/role" element={<Role />} />
                  <Route path="/view-roles" element={<ViewRole />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/attendence" element={<Attendence />} />
                  <Route
                    path="/user/employee-profile"
                    element={<EmployeeProfile />}
                  />
                </>
              ) : (
                <>
                  <Route path="/" element={<Navigate replace to="/login" />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Login />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
