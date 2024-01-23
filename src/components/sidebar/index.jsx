import { Sidenav, Nav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
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
import { useNavigate } from 'react-router-dom';

const panelStyles = {
  padding: '15px 20px',
  color: '#aaa'
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');

  const navigate = useNavigate()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '12px 0',
      gap: '12px'

    }}>
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']} appearance='subtle'>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
        <Sidenav.Body width='3200'>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            {/* Data Visualization */}
            <Nav.Item panel style={panelStyles}>
              Data Visualization
            </Nav.Item>
            <Nav.Item eventKey="1" icon={<BarLineChartIcon />} onSelect={() => navigate('/')}>
              Charts & Graphs
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<AdvancedAnalyticsIcon />} onSelect={() => navigate('/analytics')}>
              Analytics Dashboard
            </Nav.Item>

            {/* Upload Data */}
            <Nav.Item panel style={panelStyles}>
              Upload Data
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<FileUploadIcon />} onSelect={() => navigate('/file-upload')}>
              File Upload
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<HistoryIcon />} onSelect={() => navigate('/history')}>
              Upload History
            </Nav.Item>

            {/* Report Generation */}
            <Nav.Item panel style={panelStyles}>
              Report Generation
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<WechatTemplateIcon />} onSelect={() => navigate('/template')}>
              Template Management
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<ToolsIcon />} onSelect={() => navigate('/tools')}>
              Customization Tools
            </Nav.Item>

            {/* Role Management */}
            <Nav.Item panel style={panelStyles}>
              Role Management
            </Nav.Item>
            <Nav.Item eventKey="7" icon={<DashboardIcon />} onSelect={() => navigate('/role')}>
              Role Generation
            </Nav.Item>
            <Nav.Item eventKey="8" icon={<ViewsAuthorizeIcon />} onSelect={() => navigate('/view-roles')}>
              View All Roles
            </Nav.Item>

            {/* User Management */}
            <Nav.Item panel style={panelStyles}>
              User Management
            </Nav.Item>
            <Nav.Item eventKey="9" icon={<DashboardIcon />} onSelect={() => navigate('/user')}>
            User Management
            </Nav.Item>

              {/* Attendence Management */}
              <Nav.Item panel style={panelStyles}>
              Attendence
            </Nav.Item>
            <Nav.Item eventKey="10" icon={<DashboardIcon />} onSelect={() => navigate('/user')}>
            Attendence
            </Nav.Item>

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;