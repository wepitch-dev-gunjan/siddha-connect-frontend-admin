import React from 'react';
import { CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav, CNavItem, CNavTitle, CNavGroup, CBadge, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers } from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    return (
        <CSidebar unfoldable className={`border-end ${isSidebarOpen ? '' : 'collapsed'}`}>
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand>CUI</CSidebarBrand>
                {/* Toggler Button */}
                <CSidebarToggler onClick={toggleSidebar} />
            </CSidebarHeader>
            <CSidebarNav>
                <CNavTitle>Reports</CNavTitle>
                <CNavItem href="/brand-comparison">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Brand Comparison
                </CNavItem>
                <CNavItem href="/dealer-performance">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dealer Performance
                </CNavItem>
                <CNavItem href="/segment-analysis">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Segment Analysis
                </CNavItem>
                
                <CNavGroup
                    toggler={
                        <>
                            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> More Reports
                        </>
                    }
                >
                    <CNavItem href="/additional-report-1">
                        <span className="nav-icon"><span className="nav-icon-bullet"></span></span> Additional Report 1
                    </CNavItem>
                    <CNavItem href="/additional-report-2">
                        <span className="nav-icon"><span className="nav-icon-bullet"></span></span> Additional Report 2
                    </CNavItem>
                </CNavGroup>
                
                <CNavItem href="https://coreui.io">
                    <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Download CoreUI
                </CNavItem>
                <CNavItem href="https://coreui.io/pro/">
                    <CIcon customClassName="nav-icon" icon={cilLayers} /> Try CoreUI PRO
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    );
}

export default Sidebar;
