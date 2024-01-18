import 'rsuite/dist/rsuite.min.css';
import "./style.scss";
import { Sidenav, Nav, Toggle } from 'rsuite';
import { FaChartLine } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { LuLayoutTemplate } from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { FaUsersViewfinder } from "react-icons/fa6";
import React, { useState } from 'react';


const panelStyles = {
  padding: '15px 20px',
  color: '#aaa'
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#34c3ff',
  color: ' #fff'
};

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div style={{ width: 280 }}>
        <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <Sidenav  expanded={expanded} defaultOpenKeys={['3', '4']}>
       
        <Sidenav.Body style={{ width: 280, height: 840 }}>
          <Nav>
            {/* <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item> */}

              <Nav.Item panel style={panelStyles}>
                Data Visualization
              </Nav.Item>
              <Nav.Item eventKey="2-1"  icon={<FaChartLine size={20} />} style={{ display: 'flex', gap: 12 }}>Charts & Graphs</Nav.Item>
              <Nav.Item eventKey="2-2"  icon={<IoAnalytics size={20} />} style={{ display: 'flex', gap: 12 }}>Analytics Dashboard</Nav.Item>
              <Nav.Item divider />
            
            <Nav.Item panel style={panelStyles}>
                Upload Data
              </Nav.Item>
              <Nav.Item eventKey="2-1" icon={<MdOutlineFileUpload size={20} />} style={{ display: 'flex', gap: 12 }}>File Upload</Nav.Item>
              <Nav.Item eventKey="2-2" icon={<FaHistory size={20} />} style={{ display: 'flex', gap: 12 }}>Upload History</Nav.Item>
              <Nav.Item divider />

            {/* <Nav.Menu eventKey="3" title="Report Generation" icon={<MagicIcon />}> */}
              <Nav.Item divider />
              <Nav.Item panel style={panelStyles}>
                Report Generation
              </Nav.Item>
              <Nav.Item eventKey="3-1" icon={<LuLayoutTemplate size={20} />} style={{ display: 'flex', gap: 12 }}>Template Management</Nav.Item>
              <Nav.Item eventKey="3-2" icon={<LiaToolsSolid size={20} />} style={{ display: 'flex', gap: 12 }}>Customization Tools</Nav.Item>
              <Nav.Item divider />
              {/* </Nav.Menu> */}

              <Nav.Item panel style={panelStyles}>
                User Settings
              </Nav.Item>
              <Nav.Item eventKey="2-1" icon={<FaRegUserCircle size={20} />} style={{ display: 'flex', gap: 12 }}>Profile</Nav.Item>
              <Nav.Item eventKey="2-2" icon={<MdOutlineSecurity size={20} />} style={{ display: 'flex', gap: 12 }}>Security</Nav.Item>
              <Nav.Item divider />

              <Nav.Item panel style={panelStyles}>
                Role Management
              </Nav.Item>
              <Nav.Item eventKey="2-1" icon={<RiAiGenerate size={20} />} style={{ display: 'flex', gap: 12 }}>Role Generation</Nav.Item>
              <Nav.Item eventKey="2-2" icon={<FaUsersViewfinder size={20} />} style={{ display: 'flex', gap: 12 }}>View All Roles</Nav.Item>
              <Nav.Item divider />

          </Nav>
        </Sidenav.Body>
         <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  )
};

export default Sidebar;
