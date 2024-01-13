import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';
import { DashboardProvider } from './context/DashboardContext';
import { NotificationProvider } from './context/NotificationContext';
import { MediaQueryProvider } from './context/MediaQueryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MediaQueryProvider>
        <UserProvider>
          <ProfileProvider>
            <DashboardProvider>
              <NotificationProvider>
                <App />
              </NotificationProvider>
            </DashboardProvider>
          </ProfileProvider>
        </UserProvider>
      </MediaQueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);