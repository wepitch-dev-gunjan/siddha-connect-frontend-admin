import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { MediaQueryProvider } from "./context/MediaQueryContext";
import { ProfileProvider } from "./context/ProfileContext";
import { DashboardProvider } from "./context/DashboardContext";
import { AdminProvider } from "./context/AdminContext";
import { NotificationProvider } from "./context/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <MediaQueryProvider>
          <AdminProvider>
            <ProfileProvider>
              <DashboardProvider>
                <NotificationProvider>
                  <App />
                </NotificationProvider>
              </DashboardProvider>
            </ProfileProvider>
          </AdminProvider>
        </MediaQueryProvider>
      </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>
);