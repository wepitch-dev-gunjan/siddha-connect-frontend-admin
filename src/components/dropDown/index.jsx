// DropDown.jsx
import React, { useState } from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './style.scss';
import { backend_url } from '../../config'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const DropDown = ({ handleRoleChange }) => {
  const [roles, setRoles] = useState([]);
  const [activeKey, setActiveKey] = useState('Select Designation');

  const getRoles = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/role`);
      setRoles(data);
    } catch (error) {
      console.log(error);
      toast('Error fetching roles');
    }
  }

  useEffect(() => {
    getRoles();
  }, [])

  return (
    <Dropdown title={activeKey} activeKey={activeKey} onSelect={(activeKey) => {
      setActiveKey(activeKey)
      handleRoleChange(activeKey)
    }}
      toggleClassName='DropDown-container' menuStyle={{
        height: '200px',
        overflowY: 'auto',
        width: '100%',
      }}>
      {roles.map((role, i) => (
        <Dropdown.Item key={i} eventKey={role.name}>
          {role.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDown;
