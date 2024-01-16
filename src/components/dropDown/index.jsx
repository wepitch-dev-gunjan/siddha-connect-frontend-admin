// DropDown.jsx

import React from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './style.less';

const DropDown = () => {
  return (
    <Dropdown title="Dropdown" className="custom-dropdown-container">
      {/* Customize the Dropdown toggle button */}
      <Dropdown.Toggle className="custom-dropdown-toggle">Dropdown</Dropdown.Toggle>

      {/* Dropdown items go here */}
      <Dropdown.Menu>
        <Dropdown.Item>New File</Dropdown.Item>
        <Dropdown.Item>New File with Current Profile</Dropdown.Item>
        <Dropdown.Item>Download As...</Dropdown.Item>
        <Dropdown.Item>Export PDF</Dropdown.Item>
        <Dropdown.Item>Export HTML</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>About</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
