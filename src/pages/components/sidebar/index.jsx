import React from 'react';
import { CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav, CNavItem, CNavTitle, CNavGroup, CBadge, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers, cilBarChart, cilCreditCard, cilLineStyle, cilGraph, cilVector, cilViewQuilt } from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    return (
        <CSidebar unfoldable className={`border-end ${isSidebarOpen ? '' : 'collapsed'}`}>
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand>SC</CSidebarBrand>
                {/* Toggler Button */}
                <CSidebarToggler onClick={toggleSidebar} />
            </CSidebarHeader>
            <CSidebarNav>
                <CNavTitle>Reports</CNavTitle>
                <CNavItem href="/brand-comparison">
                    <CIcon customClassName="nav-icon" icon={cilBarChart} /> Sales Dashboard
                </CNavItem>
                <CNavItem href="/dealer-performance">
                    <CIcon customClassName="nav-icon" icon={cilCreditCard} /> Finance Dashboard
                </CNavItem>

                <CNavGroup
                    toggler={
                        <>
                            <CIcon customClassName="nav-icon" icon={cilVector} /> Extraction Dashboard
                        </>
                    }
                >
                    <CNavItem href="/extraction-overview">
                        <span className="nav-icon"><span className="nav-icon-bullet"></span></span> Overview
                    </CNavItem>
                    <CNavItem href="/extraction-report">
                        <span className="nav-icon"><span className="nav-icon-bullet"></span></span> Detailed report
                    </CNavItem>
                </CNavGroup>

                <CNavItem href="/segment-analysis">
                    <CIcon customClassName="nav-icon" icon={cilGraph} /> Pulse Dashboard
                </CNavItem>
                <CNavItem href="/segment-analysis">
                    <CIcon customClassName="nav-icon" icon={cilViewQuilt} /> GFK Dashboard
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
                
                {/* <CNavItem href="https://coreui.io">
                    <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Download CoreUI
                </CNavItem>
                <CNavItem href="https://coreui.io/pro/">
                    <CIcon customClassName="nav-icon" icon={cilLayers} /> Try CoreUI PRO
                </CNavItem> */}
            </CSidebarNav>
        </CSidebar>
    );
}

export default Sidebar;
