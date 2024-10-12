import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import './style.scss';

function Dashboard({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);  // Manage open/collapsed state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);  // Toggle state on button click
    };

    return (
        <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
}

export default Dashboard;
