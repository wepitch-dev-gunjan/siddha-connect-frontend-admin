import 'rsuite/dist/rsuite.min.css';
import "./style.scss";
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { FaChartLine } from "react-icons/fa6";

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
  return (
    <div style={{ width: 280 }}>
      <Sidenav defaultOpenKeys={['3', '4']}>
       
        <Sidenav.Body style={{ width: 280, height: 840 }}>
          <Nav>
            {/* <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item> */}

              <Nav.Item panel style={panelStyles}>
                Data Visualization
              </Nav.Item>
              <Nav.Item eventKey="2-1"  icon={<FaChartLine />}>Charts & Graphs</Nav.Item>
              <Nav.Item eventKey="2-2">Analytics Dashboard</Nav.Item>
              <Nav.Item divider />
            
            <Nav.Item panel style={panelStyles}>
                Upload Data
              </Nav.Item>
              <Nav.Item eventKey="2-1">File Upload</Nav.Item>
              <Nav.Item eventKey="2-2">Upload History</Nav.Item>
              <Nav.Item divider />

            {/* <Nav.Menu eventKey="3" title="Report Generation" icon={<MagicIcon />}> */}
              <Nav.Item divider />
              <Nav.Item panel style={panelStyles}>
                Report Generation
              </Nav.Item>
              <Nav.Item eventKey="3-1">Template Management</Nav.Item>
              <Nav.Item eventKey="3-2">Customization Tools</Nav.Item>
              <Nav.Item divider />
              {/* </Nav.Menu> */}

              <Nav.Item panel style={panelStyles}>
                User Settings
              </Nav.Item>
              <Nav.Item eventKey="2-1">Profile</Nav.Item>
              <Nav.Item eventKey="2-2">Security</Nav.Item>
              <Nav.Item divider />

              <Nav.Item panel style={panelStyles}>
                Role Management
              </Nav.Item>
              <Nav.Item eventKey="2-1">Role Generation</Nav.Item>
              <Nav.Item eventKey="2-2">View All Roles</Nav.Item>
              <Nav.Item divider />

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
};

export default Sidebar;
