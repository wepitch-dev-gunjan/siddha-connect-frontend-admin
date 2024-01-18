import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import './style.scss';
import BarLineChartIcon from '@rsuite/icons/BarLineChart';
import AdvancedAnalyticsIcon from '@rsuite/icons/AdvancedAnalytics';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import HistoryIcon from '@rsuite/icons/History';
import WechatTemplateIcon from '@rsuite/icons/WechatTemplate';
import ToolsIcon from '@rsuite/icons/Tools';
import ViewsAuthorizeIcon from '@rsuite/icons/ViewsAuthorize';



const panelStyles = {
  padding: '15px 20px',
  color: '#aaa'
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div style={{
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      padding: '12px 0',
      gap: '12px'

    }}>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
        style={{
          width: 100
        }}
        // size='lg'
        size='10px'
      />
      <hr />
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body width='320'>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            {/* Data Visualization */}
            <Nav.Item panel style={panelStyles}>
              Data Visualization
            </Nav.Item>
            <Nav.Item eventKey="1" icon={<BarLineChartIcon />}>
              Charts & Graphs
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<AdvancedAnalyticsIcon />}>
              Analytics Dashboard
            </Nav.Item>

            {/* Upload Data */}
            <Nav.Item panel style={panelStyles}>
              Upload Data
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<FileUploadIcon />}>
              File Upload
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<HistoryIcon />}>
              Upload History
            </Nav.Item>

            {/* Report Generation */}
            <Nav.Item panel style={panelStyles}>
              Report Generation
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<WechatTemplateIcon />}>
              Template Management
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<ToolsIcon />}>
              Customization Tools
            </Nav.Item>

            {/* Role Management */}
            <Nav.Item panel style={panelStyles}>
              Role Management
            </Nav.Item>
            <Nav.Item eventKey="7" icon={<DashboardIcon />}>
              Role Generation
            </Nav.Item>
            <Nav.Item eventKey="8" icon={<ViewsAuthorizeIcon />}>
              View All Roles
            </Nav.Item>

          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default Sidebar;